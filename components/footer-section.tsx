const FooterSection = () => {
  return (
    <footer className="flex flex-col gap-2 px-2 py-4 font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
      <p className="">Designed & Developed by <a href="https://santoshmarar.com" className="hover:border-b font-semibold">Santosh Marar</a></p>
      {/*<p className="">The source code is available on <a href="https://github.com/santosh-marar/santoshmarar.com">GitHub</a>.</p>*/}
      <p className="">Code available on <a href="https://github.com/santosh-marar/santoshmarar.com" className="hover:border-b font-semibold">GitHub</a>.</p>
    </footer>
  );
};

export default FooterSection;