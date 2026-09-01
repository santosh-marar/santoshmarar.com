import Link from "next/link";

const SocialSection = () => (
  <div className="pt-4 font-medium text-muted-foreground">
    <p>
      {" "}
      You can find me on{" "}
      <span className="link">
        <Link
          href="https://x.com/santosh_marar"
          rel="noopener noreferrer"
          target="_blank"
        >
          X
        </Link>
      </span>
      ,{" "}
      <span className="link">
        <Link
          href="https://github.com/santosh-marar"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
      </span>
      ,{" "}
      <span className="link">
        <Link
          href="https://www.linkedin.com/in/santosh-kumar-marar-98536319b/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
      </span>
      , or schedule a meetup on{" "}
      <span className="link text-primary">
        <Link
          href="https://cal.com/santosh-marar/15-min-meeting"
          rel="noopener noreferrer"
          target="_blank"
        >
          Cal.com
        </Link>
      </span>
    </p>
  </div>
);

export default SocialSection;
