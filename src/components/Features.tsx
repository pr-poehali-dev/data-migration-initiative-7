import Icon from "@/components/ui/icon";

const figures = [
  {
    icon: "BookOpen",
    years: "1827–1915",
    name: "Александр Скребицкий",
    description: "Первый систематизатор истории обучения слепых в России. Его труд «Воспитание и образование слепых» стал основополагающим для отечественной тифлопедагогики.",
  },
  {
    icon: "Eye",
    years: "1874–1934",
    name: "Александр Щербина",
    description: "Незрячий учёный и педагог. Разработал психологические основы тифлопедагогики, исследовал компенсаторные возможности слепых и роль осязания в познании.",
  },
  {
    icon: "GraduationCap",
    years: "1924–1987",
    name: "Юрий Кулагин",
    description: "Разработал методики исследования восприятия у слепых и слабовидящих детей. Заложил научные основы коррекционной работы в советской специальной педагогике.",
  },
  {
    icon: "Microscope",
    years: "XX век",
    name: "М.И. Земцова",
    description: "Создала фундаментальные труды по тифлопедагогике и тифлопсихологии. Её работы о зрительном восприятии слабовидящих детей актуальны по сей день.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Ключевые деятели</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Учёные, изменившие подход к образованию
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {figures.map((figure, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center shrink-0 group-hover:bg-sage/20 transition-colors duration-500">
                  <Icon name={figure.icon} size={24} className="text-sage" />
                </div>
                <span className="text-sm text-muted-foreground pt-3">{figure.years}</span>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{figure.name}</h3>
              <p className="text-muted-foreground leading-relaxed">{figure.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
