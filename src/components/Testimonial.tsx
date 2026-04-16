export function Testimonial() {
  return (
    <section className="py-32 px-6 bg-sage/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-8 block">Цитата</span>

        <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-tight mb-10 text-balance">
          «Слепой ребёнок — такой же ребёнок, как и зрячий. Он нуждается не в жалости, а в грамотном педагогическом руководстве.»
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center">
            <span className="font-serif text-xl text-sage">М</span>
          </div>
          <div className="text-left">
            <p className="text-foreground font-medium">М.И. Земцова</p>
            <p className="text-sm text-muted-foreground">Тифлопедагог, автор фундаментальных трудов по специальной педагогике</p>
          </div>
        </div>
      </div>
    </section>
  );
}