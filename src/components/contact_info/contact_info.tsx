import FacebookLink from "../util/facebook_link";
import InstagramLink from "../util/instagram_link";

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-3 justify-items-center w-1/2">
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
      <div className="flex flex-col text-xs col-start-2 mt-5">
        <a href="mailto:info@proaktividrottscenter.se">info@kampsportstadion.se</a>
        <a href="tel:0812137337">08-12137337</a>
        <p>Lidingövägen 1, 11433 Stockholm</p>
      </div>
    </div>
  )
}