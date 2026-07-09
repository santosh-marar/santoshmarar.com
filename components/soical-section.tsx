import Link from "next/link";

const SocialSection = () => {
  return (
    <div className="pt-2 font-medium text-muted-foreground px-2">
      <p>
        {" "}
        You can find me on{" "}
        <span className="link">
          <Link
            href="https://x.com/santosh_marar"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </Link>
        </span>
        ,{" "}
        <span className="link">
          <Link
            href="https://github.com/santosh-marar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </span>
        ,{" "}
        <span className="link">
          <Link
            href="https://www.linkedin.com/in/santosh-kumar-marar-98536319b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </span>
        , or schedule a meetup on{" "}
        <span className="link text-primary">
          <Link
            href="https://cal.com/santosh-marar/15-min-meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cal.com
          </Link>
        </span>
      </p>
    </div>
  );
};

export default SocialSection;
