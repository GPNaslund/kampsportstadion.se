import FacebookLink from "../util/facebook_link";
import InstagramLink from "../util/instagram_link";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-4 justify-items-center w-auto">
      <a href={InstagramLink('kampsportstadion')} target="_blank">
        <img
          src="/instagram.svg"
          alt="instagram icon"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </a>
      <a href={FacebookLink('kampsportstadion')} target="_blank">
        <img
          src="/facebook.svg"
          alt="facebook icon"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </a>
      <a href="https://goo.gl/maps/5ipnHxJKXbrAHLBw6" target="_blank">
        <img
          src="/googlemaps.svg"
          alt="google maps icon"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </a>
      <a href="https://www.gymcontrol.se/global/webshop/index.php?uid=8975&action=home" target="_blank">
        <img
          src="/shopping_cart_icon.svg"
          alt="shopping cart icon"
          style={{
            width: "50px",
            height: "50px",
          }}
        />
      </a>
      <div className="flex flex-col text-xs col-start-2 col-span-2 mt-5 text-center">
        <a href="mailto:info@kampsportstadion.se">info@kampsportstadion.se</a>
        <a href="tel:0766259183">076-6259183</a>
        <p>Lidingövägen 1, 11433 Stockholm</p>
      </div>
    </div>
  )
}