import Image from "next/image";

export default function NotFoundIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <Image
        src="https://images.openai.com/static-rsc-4/sBlj_E93REAjbjjdgp0NvVB9-YGJW5Rg90v7Xm-f6Uowgm3HNdyuUzauBDEmS_CAzxrNRJvtcrLDrNzaKTgTYq1q-C2Qm91LFexWB9KXOayoyerPjDy74Bhzs4dx6ChsJE-54EEYy726RJYeNJKTSq3ZPmtc1sUXv9lRHZ9gna2p0m1r54-EZUW1vZmGmFKW?purpose=fullsize"
        alt="StudioSpace 404 creative illustration"
        width={700}
        height={600}
        priority
        unoptimized
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
