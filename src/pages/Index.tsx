import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeVariant, setActiveVariant] = useState<'color' | 'mono' | 'dark'>('color');

  const logoVariants = {
    color: {
      gradient: 'bg-gradient-to-br from-[#FF6B35] via-[#F97316] to-[#004E89]',
      text: 'text-white',
      title: 'Цветной'
    },
    mono: {
      gradient: 'bg-gradient-to-br from-gray-800 to-gray-950',
      text: 'text-white',
      title: 'Монохром'
    },
    dark: {
      gradient: 'bg-gradient-to-br from-[#1A1F2C] to-[#0f1117]',
      text: 'text-white',
      title: 'Темный'
    }
  };

  const currentVariant = logoVariants[activeVariant];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-accent mb-4">
            Персональный Логотип
          </h1>
          <p className="text-xl font-rubik text-muted-foreground">
            Современный стиль · Слесарь Сантехник
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-12 bg-white shadow-2xl overflow-hidden relative group animate-scale-in">
            <div 
              className={`absolute inset-0 ${currentVariant.gradient} animate-gradient-shift transition-all duration-700`}
              style={{ backgroundSize: '200% 200%' }}
            />
            <div className="relative z-10 flex items-center justify-center min-h-[400px]">
              <div className={`${currentVariant.text} transition-all duration-500 group-hover:scale-110`}>
                <div className="text-[120px] md:text-[180px] leading-none font-montserrat font-black tracking-tighter">
                  Д И
                </div>
                <div className="text-center mt-6 text-lg md:text-xl font-rubik font-medium tracking-widest opacity-90">
                  СЛЕСАРЬ САНТЕХНИК
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-montserrat font-bold mb-6 text-accent">
                Варианты логотипа
              </h2>
              <div className="space-y-3">
                {(Object.keys(logoVariants) as Array<keyof typeof logoVariants>).map((variant) => (
                  <Button
                    key={variant}
                    onClick={() => setActiveVariant(variant)}
                    variant={activeVariant === variant ? 'default' : 'outline'}
                    className="w-full justify-start text-lg font-rubik transition-all hover:scale-105"
                    size="lg"
                  >
                    <Icon 
                      name={activeVariant === variant ? 'CheckCircle2' : 'Circle'} 
                      className="mr-3" 
                      size={20} 
                    />
                    {logoVariants[variant].title}
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <h3 className="text-xl font-montserrat font-bold mb-4 text-accent flex items-center gap-2">
                <Icon name="Palette" size={24} />
                Цветовая палитра
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <div className="w-full h-16 rounded-lg bg-[#FF6B35] shadow-md hover:scale-105 transition-transform" />
                  <p className="text-xs font-rubik text-center text-muted-foreground">#FF6B35</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 rounded-lg bg-[#004E89] shadow-md hover:scale-105 transition-transform" />
                  <p className="text-xs font-rubik text-center text-muted-foreground">#004E89</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 rounded-lg bg-[#1A1F2C] shadow-md hover:scale-105 transition-transform" />
                  <p className="text-xs font-rubik text-center text-muted-foreground">#1A1F2C</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white shadow-lg">
              <h3 className="text-xl font-montserrat font-bold mb-4 text-accent flex items-center gap-2">
                <Icon name="Type" size={24} />
                Типографика
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Инициалы:</p>
                  <p className="text-2xl font-montserrat font-black">Montserrat Black</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Подпись:</p>
                  <p className="text-xl font-rubik font-medium">Rubik Medium</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 bg-gradient-to-br from-[#FF6B35] to-[#F97316] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-6xl font-montserrat font-black mb-3">Д И</div>
            <p className="text-sm font-rubik tracking-widest opacity-90">СЛЕСАРЬ САНТЕХНИК</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-950 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-6xl font-montserrat font-black mb-3">Д И</div>
            <p className="text-sm font-rubik tracking-widest opacity-90">СЛЕСАРЬ САНТЕХНИК</p>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-[#004E89] to-[#0EA5E9] text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="text-6xl font-montserrat font-black mb-3">Д И</div>
            <p className="text-sm font-rubik tracking-widest opacity-90">СЛЕСАРЬ САНТЕХНИК</p>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
            <Icon name="Wrench" size={20} className="text-primary" />
            <span className="font-rubik font-medium text-accent">Ваш персональный бренд готов</span>
            <Icon name="Droplets" size={20} className="text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
