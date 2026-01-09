import fs from "fs";
import path from "path";

export interface DownloadFile {
  filename: string;
  displayName: string;
  path: string;
  size: number;
  extension: string;
  formattedSize: string;
}

/**
 * Formats file size in bytes to human-readable format (KB, MB)
 */
function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
}

/**
 * Generates a clean display name from filename
 * - Removes "Vario_" prefix
 * - Removes file extension
 * - Replaces underscores with spaces
 * - Capitalizes appropriately
 */
function generateDisplayName(filename: string): string {
  let displayName = filename;

  // Remove file extension
  displayName = displayName.replace(/\.(pdf|docx)$/i, "");

  // Remove "Vario_" prefix if present
  if (displayName.startsWith("Vario_")) {
    displayName = displayName.substring(6);
  }

  // Replace underscores with spaces
  displayName = displayName.replace(/_/g, " ");

  // Capitalize first letter of each word, but preserve existing capitalization
  // This handles cases like "6040" and hyphenated words like "Tax-Efficient" correctly
  displayName = displayName
    .split(" ")
    .map((word) => {
      // If word contains hyphens, capitalize each part
      if (word.includes("-")) {
        return word
          .split("-")
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
          .join("-");
      }
      // If word is all uppercase or has mixed case, preserve it
      if (word === word.toUpperCase() && word.length > 1) {
        return word;
      }
      // Otherwise capitalize first letter
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");

  return displayName;
}

/**
 * Scans the /public/downloads directory and returns metadata for all PDF and DOCX files
 * This function runs at build time, not at runtime
 */
export function getDownloadFiles(): DownloadFile[] {
  try {
    const downloadsDir = path.join(process.cwd(), "public", "downloads");

    // Check if directory exists
    if (!fs.existsSync(downloadsDir)) {
      console.warn(`Downloads directory not found: ${downloadsDir}`);
      return [];
    }

    const files = fs.readdirSync(downloadsDir);

    const downloadFiles: DownloadFile[] = files
      .filter((file) => /\.(pdf|docx)$/i.test(file))
      .map((file) => {
        const filePath = path.join(downloadsDir, file);
        const stats = fs.statSync(filePath);
        const extension = path.extname(file).toLowerCase().slice(1); // Remove the dot

        return {
          filename: file,
          displayName: generateDisplayName(file),
          path: `/downloads/${file}`,
          size: stats.size,
          extension: extension,
          formattedSize: formatFileSize(stats.size),
        };
      })
      .sort((a, b) => a.displayName.localeCompare(b.displayName)); // Sort alphabetically

    return downloadFiles;
  } catch (error) {
    console.error("Error reading downloads directory:", error);
    return [];
  }
}
