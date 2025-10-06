import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeVariant, setActiveVariant] = useState<'color' | 'mono' | 'white'>('color');

  const logoVariants = {
    color: {
      bg: 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500',
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
      text: 'text-black',
      border: 'border-yellow-500',
      title: 'Белый фон'
    }
  };

  const currentVariant = logoVariants[activeVariant];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-montserrat font-black text-yellow-500 mb-4">
            Логотип Такси
          </h1>
          <p className="text-xl font-rubik text-muted-foreground">
            Таксуем В АБК
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-12 bg-white shadow-2xl overflow-hidden animate-scale-in flex items-center justify-center">
            <div className="relative group">
              <div 
                className={`w-[400px] h-[400px] rounded-full ${currentVariant.bg} flex items-center justify-center border-8 ${currentVariant.border} shadow-2xl transition-all duration-500 group-hover:scale-105 overflow-hidden relative`}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] flex flex-col gap-2">
                  <div className="flex gap-2 justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 1"
                      className="w-[100px] h-[100px] object-cover rounded-lg border-2 border-white shadow-lg"
                    />
                    <img 
                      src="https://cdn.poehali.dev/files/f8167791-236e-4669-ae5f-90b13d65b16f.png"
                      alt="Фото 2"
                      className="w-[100px] h-[100px] object-cover rounded-lg border-2 border-white shadow-lg"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 3"
                      className="w-[100px] h-[100px] object-cover rounded-lg border-2 border-white shadow-lg"
                    />
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
                <text className="fill-white font-rubik font-black text-[28px] tracking-[0.4em]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)'}}>
                  <textPath href="#circlePath" startOffset="22%">
                    ТАКСУЕМ В АБК
                  </textPath>
                </text>
              </svg>
            </div>
          </Card>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="text-2xl font-montserrat font-bold mb-6 text-yellow-600">
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
              <h3 className="text-xl font-montserrat font-bold mb-4 text-yellow-600 flex items-center gap-2">
                <Icon name="Palette" size={24} />
                Цветовая палитра
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-2">
                  <div className="w-full h-16 rounded-lg bg-yellow-400 shadow-md hover:scale-105 transition-transform" />
                  <p className="text-xs font-rubik text-center text-muted-foreground">#FACC15</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 rounded-lg bg-orange-500 shadow-md hover:scale-105 transition-transform" />
                  <p className="text-xs font-rubik text-center text-muted-foreground">#F97316</p>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 rounded-lg bg-red-500 shadow-md hover:scale-105 transition-transform" />
                  <p className="text-xs font-rubik text-center text-muted-foreground">#EF4444</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-montserrat font-bold text-yellow-600 mb-6">Примеры использования</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] flex flex-col gap-1">
                  <div className="flex gap-1 justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 1"
                      className="w-[50px] h-[50px] object-cover rounded border border-white shadow-md"
                    />
                    <img 
                      src="https://cdn.poehali.dev/files/f8167791-236e-4669-ae5f-90b13d65b16f.png"
                      alt="Фото 2"
                      className="w-[50px] h-[50px] object-cover rounded border border-white shadow-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 3"
                      className="w-[50px] h-[50px] object-cover rounded border border-white shadow-md"
                    />
                  </div>
                </div>
              </div>
              <svg className="absolute inset-0 w-48 h-48 pointer-events-none" viewBox="0 0 192 192">
                <defs>
                  <path id="circle1" d="M 96, 96 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0" />
                </defs>
                <text className="fill-white font-rubik font-black text-[13px] tracking-[0.3em]" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.7)'}}>
                  <textPath href="#circle1" startOffset="18%">
                    ТАКСУЕМ В АБК
                  </textPath>
                </text>
              </svg>
            </div>
          </Card>

          <Card className="p-8 bg-gray-900 shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg relative bg-gradient-to-br from-gray-800 to-gray-950">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] flex flex-col gap-1">
                  <div className="flex gap-1 justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 1"
                      className="w-[50px] h-[50px] object-cover rounded border border-white shadow-md grayscale"
                    />
                    <img 
                      src="https://cdn.poehali.dev/files/f8167791-236e-4669-ae5f-90b13d65b16f.png"
                      alt="Фото 2"
                      className="w-[50px] h-[50px] object-cover rounded border border-white shadow-md grayscale"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 3"
                      className="w-[50px] h-[50px] object-cover rounded border border-white shadow-md grayscale"
                    />
                  </div>
                </div>
              </div>
              <svg className="absolute inset-0 w-48 h-48 pointer-events-none" viewBox="0 0 192 192">
                <defs>
                  <path id="circle2" d="M 96, 96 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0" />
                </defs>
                <text className="fill-white font-rubik font-black text-[13px] tracking-[0.3em]" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.9), 0 0 6px rgba(0,0,0,0.7)'}}>
                  <textPath href="#circle2" startOffset="18%">
                    ТАКСУЕМ В АБК
                  </textPath>
                </text>
              </svg>
            </div>
          </Card>

          <Card className="p-8 bg-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg relative bg-white">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110px] h-[110px] flex flex-col gap-1">
                  <div className="flex gap-1 justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 1"
                      className="w-[50px] h-[50px] object-cover rounded border border-gray-200 shadow-md"
                    />
                    <img 
                      src="https://cdn.poehali.dev/files/f8167791-236e-4669-ae5f-90b13d65b16f.png"
                      alt="Фото 2"
                      className="w-[50px] h-[50px] object-cover rounded border border-gray-200 shadow-md"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/996ab09b-96da-494a-9c42-8b51b0a35856.png"
                      alt="Фото 3"
                      className="w-[50px] h-[50px] object-cover rounded border border-gray-200 shadow-md"
                    />
                  </div>
                </div>
              </div>
              <svg className="absolute inset-0 w-48 h-48 pointer-events-none" viewBox="0 0 192 192">
                <defs>
                  <path id="circle3" d="M 96, 96 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0" />
                </defs>
                <text className="fill-black font-rubik font-black text-[13px] tracking-[0.3em]" style={{textShadow: '0 0 3px white, 0 0 5px white'}}>
                  <textPath href="#circle3" startOffset="18%">
                    ТАКСУЕМ В АБК
                  </textPath>
                </text>
              </svg>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
            <Icon name="Car" size={20} className="text-yellow-500" />
            <span className="font-rubik font-medium text-gray-800">Логотип такси готов</span>
            <Icon name="Sparkles" size={20} className="text-orange-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;