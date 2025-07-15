import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Coffee, Award } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Любовь к процессу',
      description: 'Каждое блюдо готовится с душой и вниманием к деталям'
    },
    {
      icon: Coffee,
      title: 'Качественные продукты',
      description: 'Отборные ингредиенты от проверенных поставщиков'
    },
    {
      icon: Users,
      title: 'Гостеприимство',
      description: 'Мы создаём атмосферу, где каждый чувствует себя как дома'
    },
    {
      icon: Award,
      title: 'Мастерство',
      description: 'Наши повара постоянно совершенствуют свои навыки'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            О нас
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            История о том, как родилось место, где встречаются вкус, уют и искренность
          </p>
        </div>

        {/* Main Story */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Café Delice родилось из простой мечты — создать место, где время замедляется, 
                  а каждая чашка кофе становится поводом для маленького праздника. 
                  В 2019 году мы открыли двери нашего первого кафе, и с тех пор каждый день 
                  стараемся делать его лучше.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Наша философия проста: используем только свежие, качественные продукты, 
                  готовим с любовью и создаём атмосферу, в которой хочется задержаться. 
                  Мы верим, что хорошая еда и искренне гостеприимство способны сделать 
                  день любого человека чуточку лучше.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  В нашем меню вы найдёте как классические блюда европейской кухни, 
                  так и авторские интерпретации привычных вкусов. Кофе мы готовим из зёрен, 
                  которые специально обжаривают для нас, а десерты выпекаем каждое утро 
                  в собственной кондитерской.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Наши принципы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground flex-1">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <Card className="bg-accent/30">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Наша команда
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                За каждым блюдом и каждой чашкой кофе стоят талантливые люди, 
                которые вкладывают в своё дело не только профессионализм, но и частичку души. 
                Наши повара, бариста и официанты — это одна большая семья, 
                объединённая любовью к гостеприимству.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Анна Петрова</h4>
                  <p className="text-muted-foreground">Шеф-повар</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Михаил Сидоров</h4>
                  <p className="text-muted-foreground">Главный бариста</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Екатерина Иванова</h4>
                  <p className="text-muted-foreground">Менеджер зала</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Invitation */}
        <div className="text-center">
          <Card>
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Приходите к нам в гости!
              </h2>
              <p className="text-lg text-muted-foreground">
                Мы будем рады видеть вас в Café Delice. Приходите один, с друзьями, 
                семьёй или коллегами — у нас найдётся уютное местечко для каждого.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;