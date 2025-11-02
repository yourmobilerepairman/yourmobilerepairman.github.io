export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#452710] text-white mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-sm">
            Copyright © Your Mobile Repairman {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
