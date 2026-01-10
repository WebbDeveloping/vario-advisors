"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface PdfViewerModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  pdfUrl: string;
}

export default function PdfViewerModal({
  isOpen,
  onOpenChange,
  title,
  pdfUrl,
}: PdfViewerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0 sm:rounded-lg">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">
          Viewing PDF: {title}
        </DialogDescription>
        <div className="w-full" style={{ height: "80vh" }}>
          <iframe
            src={pdfUrl}
            title={title}
            className="h-full w-full rounded-lg"
            style={{ border: "none" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
