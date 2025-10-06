import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeVariant, setActiveVariant] = useState<'color' | 'mono' | 'white'>('color');

  const logoVariants = {
    color: {
      bg: 'bg-gradient-to-br from-[#FF6B35] via-[#F97316] to-[#004E89]',
      text: 'text-white',
      border: 'border-white',
      title: 'Цветной'
    },
    mono: {
      bg: 'bg-gradient-to-br from-gray-800 to-gray-950',
      text: 'text-white',
      border: 'border-white',
      title: 'Монохром'
    },
    white: {
      bg: 'bg-white',
      text: 'text-[#1A1F2C]',
      border: 'border-[#FF6B35]',
      title: 'Белый фон'
    }
  };

  const currentVariant = logoVariants[activeVariant];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-accent mb-4">
            Логотип
          </h1>
          <p className="text-xl font-rubik text-muted-foreground">
            Слесарь Сантехник · Инициалы Д И
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-12 bg-white shadow-2xl overflow-hidden animate-scale-in flex items-center justify-center">
            <div className="relative group">
              <div 
                className={`w-[400px] h-[400px] rounded-full ${currentVariant.bg} flex items-center justify-center border-8 ${currentVariant.border} shadow-2xl transition-all duration-500 group-hover:scale-105 animate-gradient-shift`}
                style={{ backgroundSize: '200% 200%' }}
              >
                <div className={`${currentVariant.text} text-center transition-all duration-500`}>
                  <div className="text-[140px] leading-none font-montserrat font-black tracking-tight">
                    ДИ
                  </div>
                </div>
              </div>
              
              <svg className="absolute inset-0 w-[400px] h-[400px] pointer-events-none" viewBox="0 0 400 400">
                <defs>
                  <path
                    id="circlePath"
                    d="M 200, 200 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                  />
                </defs>
                <text className={`${currentVariant.text} fill-current font-rubik font-bold text-[18px] tracking-[0.3em]`}>
                  <textPath href="#circlePath" startOffset="25%">
                    СЛЕСАРЬ · САНТЕХНИК
                  </textPath>
                </text>
              </svg>
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
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-montserrat font-bold text-accent mb-6">Примеры использования</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#FF6B35] via-[#F97316] to-[#004E89] flex items-center justify-center border-4 border-white shadow-lg">
                <div className="text-white text-6xl font-montserrat font-black">ДИ</div>
              </div>
              <svg className="absolute inset-0 w-48 h-48 pointer-events-none" viewBox="0 0 192 192">
                <defs>
                  <path id="circle1" d="M 96, 96 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0" />
                </defs>
                <text className="fill-white font-rubik font-bold text-[9px] tracking-[0.2em]">
                  <textPath href="#circle1" startOffset="25%">
                    СЛЕСАРЬ · САНТЕХНИК
                  </textPath>
                </text>
              </svg>
            </div>
          </Card>

          <Card className="p-8 bg-gray-900 shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border-4 border-white shadow-lg">
                <div className="text-white text-6xl font-montserrat font-black">ДИ</div>
              </div>
              <svg className="absolute inset-0 w-48 h-48 pointer-events-none" viewBox="0 0 192 192">
                <defs>
                  <path id="circle2" d="M 96, 96 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0" />
                </defs>
                <text className="fill-white font-rubik font-bold text-[9px] tracking-[0.2em]">
                  <textPath href="#circle2" startOffset="25%">
                    СЛЕСАРЬ · САНТЕХНИК
                  </textPath>
                </text>
              </svg>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center border-4 border-[#FF6B35] shadow-lg">
                <div className="text-[#1A1F2C] text-6xl font-montserrat font-black">ДИ</div>
              </div>
              <svg className="absolute inset-0 w-48 h-48 pointer-events-none" viewBox="0 0 192 192">
                <defs>
                  <path id="circle3" d="M 96, 96 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0" />
                </defs>
                <text className="fill-[#1A1F2C] font-rubik font-bold text-[9px] tracking-[0.2em]">
                  <textPath href="#circle3" startOffset="25%">
                    СЛЕСАРЬ · САНТЕХНИК
                  </textPath>
                </text>
              </svg>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
            <Icon name="Wrench" size={20} className="text-primary" />
            <span className="font-rubik font-medium text-accent">Круглый логотип готов</span>
            <Icon name="Droplets" size={20} className="text-secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
