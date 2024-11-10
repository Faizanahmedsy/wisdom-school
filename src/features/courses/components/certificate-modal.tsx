"use client";

import { useRef, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, FileDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { jsPDF } from 'jspdf';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  completedAt: string;
}

export function CertificateModal({ isOpen, onClose, courseTitle, completedAt }: CertificateModalProps) {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [studentName, setStudentName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  const generatePDF = async () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Add background pattern
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.1);
    for (let i = 0; i < doc.internal.pageSize.getWidth(); i += 10) {
      doc.line(i, 0, i, doc.internal.pageSize.getHeight());
    }
    for (let i = 0; i < doc.internal.pageSize.getHeight(); i += 10) {
      doc.line(0, i, doc.internal.pageSize.getWidth(), i);
    }

    // Add border
    doc.setDrawColor(44, 62, 80);
    doc.setLineWidth(1);
    doc.rect(10, 10, doc.internal.pageSize.getWidth() - 20, doc.internal.pageSize.getHeight() - 20);
    doc.setLineWidth(0.5);
    doc.rect(12, 12, doc.internal.pageSize.getWidth() - 24, doc.internal.pageSize.getHeight() - 24);

    // Add header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(40);
    doc.setTextColor(44, 62, 80);
    doc.text("Certificate of Completion", doc.internal.pageSize.getWidth() / 2, 50, { align: "center" });

    // Add decorative line
    doc.setLineWidth(0.5);
    doc.setDrawColor(44, 62, 80);
    doc.line(40, 60, doc.internal.pageSize.getWidth() - 40, 60);

    // Add content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor(80, 80, 80);
    doc.text("This is to certify that", doc.internal.pageSize.getWidth() / 2, 85, { align: "center" });

    // Add student name
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(44, 62, 80);
    doc.text(studentName, doc.internal.pageSize.getWidth() / 2, 100, { align: "center" });

    // Add course completion text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor(80, 80, 80);
    doc.text("has successfully completed the course", doc.internal.pageSize.getWidth() / 2, 115, { align: "center" });

    // Add course title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(44, 62, 80);
    doc.text(courseTitle, doc.internal.pageSize.getWidth() / 2, 130, { align: "center" });

    // Add completion date
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor(80, 80, 80);
    doc.text(
      `Completed on ${new Date(completedAt).toLocaleDateString()}`,
      doc.internal.pageSize.getWidth() / 2,
      150,
      { align: "center" }
    );

    // Add Wisdom School text
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Wisdom School", doc.internal.pageSize.getWidth() / 2, 180, { align: "center" });

    // Save the PDF
    doc.save(`${courseTitle.toLowerCase().replace(/\s+/g, '-')}-certificate.pdf`);
  };

  const handleDownload = () => {
    if (!studentName) {
      setShowNameInput(true);
    } else {
      generatePDF();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Course Certificate</DialogTitle>
        </DialogHeader>
        
        {showNameInput ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="student-name">Enter your name as it should appear on the certificate</Label>
              <Input
                id="student-name"
                placeholder="Your full name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <Button 
              onClick={generatePDF}
              disabled={!studentName.trim()}
              className="w-full"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Generate Certificate
            </Button>
          </div>
        ) : (
          <>
            <div 
              ref={certificateRef}
              className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-lg border-8 border-double border-primary/20"
            >
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-4xl font-serif font-bold text-primary">Certificate of Completion</h2>
                  <div className="h-1 w-40 bg-primary/20 mx-auto rounded-full" />
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-muted-foreground">This certifies that</p>
                  <p className="text-3xl font-bold text-primary">{studentName || "Your Name"}</p>
                  <p className="text-lg text-muted-foreground">has successfully completed</p>
                  <p className="text-2xl font-bold text-primary">{courseTitle}</p>
                  <p className="text-lg text-muted-foreground">at</p>
                  <p className="text-2xl font-serif font-bold text-primary">Wisdom School</p>
                </div>
                
                <div className="pt-8">
                  <p className="text-sm text-muted-foreground">
                    Completed on {new Date(completedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <Button onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download Certificate
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}