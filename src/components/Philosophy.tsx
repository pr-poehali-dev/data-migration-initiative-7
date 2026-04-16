export function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            <img
              src="/minimal-scandinavian-workspace-with-natural-light-.jpg"
              alt="Рабочее пространство"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-muted-foreground italic">
                «Воспитание слепых — это не снисхождение, а долг общества перед каждым человеком, способным к развитию.»
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <span className="text-sm uppercase tracking-widest text-sage">О теме</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground leading-tight text-balance">
              Путь длиной в два века
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Российская тифлопедагогика прошла путь от первых благотворительных школ для слепых в XIX веке до научно обоснованной системы специального образования. Каждый этап — это имена людей, посвятивших жизнь этому делу.
              </p>
              <p>
                Скребицкий, Щербина, Кулагин, Земцова — их труды заложили теоретический фундамент и изменили практику обучения незрячих детей в России и за её пределами.
              </p>
            </div>
            <div className="pt-4">
              <a href="#features" className="inline-flex items-center gap-2 text-foreground group">
                <span className="border-b border-foreground pb-0.5">Ключевые деятели</span>
                <span className="text-terracotta group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}