const FooterSection = () => (
  <footer className="mt-2 flex w-full flex-col items-start justify-between px-2 py-4 font-medium text-muted-foreground md:flex-row md:items-center md:justify-between md:gap-2">
    <p>
      Designed & Developed by{" "}
      <a
        className="link"
        href="https://santoshmarar.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Santosh Marar
      </a>
    </p>

    <p>
      Code available on{" "}
      <a
        className="link"
        href="https://github.com/santosh-marar/santoshmarar.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default FooterSection;
