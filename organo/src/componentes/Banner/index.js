import "./Banner.css";

function Banner() {
    //JSX
  return (
    <header className="banner"> {/* aqui nao eh soh class pq soh class eh uma palavra reservada do react */}
      <img src="/images/banner.png" alt="banner principal" />
    </header>
  );
}

export default Banner;
