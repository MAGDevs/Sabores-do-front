function Footer() {
  return (
    <>
    <footer className="bg-pink-700 text-pink-300 w-full mt-auto px-4 py-6 border-t bottom-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <p className="font-medium">Agatha Yie Won Yun <span className="text-pink-200">RM: 561507</span></p>
          <p className="font-medium">Gabrielly Bonfim Silva <span className="text-pink-200">RM: 566242</span></p>
          <p className="font-medium">Mirelly Sousa Alves <span className="text-pink-200">RM: 566299</span></p>
        </div>
        <div className="mt-4 pt-4 border-t border-pink-200">
          <p className="text-sm text-pink-300">EXPORT DEFAULT - TODOS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;