export default function Footer() {
  return (
    <footer className="h-32 w-full mt-40">
      <div className="w-full h-full flex items-center">
        <a href="https://goo.gl/maps/5ipnHxJKXbrAHLBw6" target="_blank">
          <img
            src="/dif.png"
            alt="Djurgårdens IF logo"
            style={{
              width: "75px",
              height: "75px",
            }}
          />
        </a>
        <div className="text-xs w-2/3">
          <p>Kampsportstadion är en ideell idrottsförening som är en del av Djurgårdsalliansen och Djurgårdens IF</p>
          <p>Org nmr: 112332123</p>
        </div>
      </div>
    </footer>
  )
}