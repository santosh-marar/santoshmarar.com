const FooterSection = () => {
  return (
    <footer className="mt-2 flex w-full flex-col items-center justify-between gap-2 px-2 py-4 font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
      <p>
        Designed & Developed by{" "}
        <a
          href="https://santoshmarar.com"
          className="font-semibold border-b border-transparent transition-all duration-200 hover:text-primary hover:border-primary"
        >
          Santosh Marar
        </a>
      </p>

      <p>
        Code available on{" "}
        <a
          href="https://github.com/santosh-marar/santoshmarar.com"
          className="font-semibold border-b border-transparent transition-all duration-200 hover:text-primary hover:border-primary"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default FooterSection;