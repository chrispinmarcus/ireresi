export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#"><span className="brand-mark">M</span> MOVIE<span>BAZER</span></a>
      <p>Made for people who love a good story.</p>
      <span className="copyright">© {new Date().getFullYear()} MovieBazer. All rights reserved.</span>
    </footer>
  );
}
