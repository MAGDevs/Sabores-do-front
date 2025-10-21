function Footer() {
  return (
    <footer className="bg-pink-700 text-pink-300 py-6 px-4 border-t border-pink-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <p className="font-medium">Agatha Yie Won Yun <span className="text-pink-600">RM: 561507</span></p>
          <p className="font-medium">Gabrielly Bonfim Silva <span className="text-pink-600">RM: 566242</span></p>
          <p className="font-medium">Mirelly Sousa Alves <span className="text-pink-600">RM: 566299</span></p>
        </div>
        <div className="mt-4 pt-4 border-t border-pink-200">
          <p className="text-sm text-pink-600">© 2025- Sabores do Front - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;