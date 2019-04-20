//Основная функция-конструктор
function Transport(use,classification,engineType) {
	this.use = 'Передвижение';
	this.classification = 'Транспортное средство';
	this.engineType = 'Внутреннего сгорания'; 
};

let AllTransport = new Transport();

//Дочерняя фунция-конструктор
function Auto(use,classification,engineType){
	Transport.call(this);
	this.environment = 'Земля';
	this.engineType = 'Электрический или внутреннего сгорания';
}

let AutoTransport = new Auto();

//Дочерняя функция-конструктор
function Plane(use,classification,engineType){
	Transport.call(this);
	this.environment = 'Воздух';
	this.engineType = 'Внутреннего сгорания или реактивный';
	this.flightAltitude = '9-12 киллометров'
}

let AirTransport = new Plane();

//Дочерняя функция-консруктор
function Ship(use,classification,engineType){
	Transport.call(this);
	this.environment = 'Вода';
	this.displacement = 'от 27 тонн';
}

let WaterTransport = new Ship();


//Логика кнопок, лишь для удобства интерфейса


//Кнопка появления типов транспортов
$(document).ready(function(){
	$('.types').on('click',function(){
		//Функция добавить-убрать элемент
            if($('.transport-contaner').hasClass('get')){
            	$('.auto').css({'visibility':'hidden'});
            	$('.plane').css({'visibility':'hidden'});
            	$('.ship').css({'visibility':'hidden'});
                $('.transport-contaner').removeClass('get');
            }else{
            	$('.transport-contaner').addClass('get');
            	$('.auto').css({'visibility':'visible'});
            	$('.plane').css({'visibility':'visible'});
            	$('.ship').css({'visibility':'visible'});
            }	
	});
});

//Кнопка совойств метки "Транспорт", у каждой кнопки своя логика , для удобства отладки
$(document).ready(function(){
	$('.transport').on('click','.transport-all-properties', function(){
	//Промежуточная переменная , хранящая в себе HTML-элементы
      let s = '';
      s+='<div class = "transport-all">Назначение - ' + AllTransport.use + '<br><br>';
      s+='Классификация - ' + AllTransport.classification + '<br><br>';
      s+='Тип двигателя - ' + AllTransport.engineType + '</div>';
      //Функция добавить-убрать
                   if($('.transport').hasClass('on')){
                        	$('.transport-all').remove();
                        	$('.transport').removeClass('on');

                   }else{
      	                     $('.transport').addClass('on');
		                      $('.transport').append(s);
        }
	});
});

//Кнопка свойств метки "Автомобили"
$(document).ready(function(){
	$('.auto').on('click','.transport-all-properties', function(){
	//Промежуточная переменная,хранящая в себе HTML-эементы
      let a = '';
      a+='<div class = "transport-all">Назначение - ' + AutoTransport.use + '<br><br>';
      a+='Классификация - ' + AutoTransport.classification + '<br><br>';
      a+='Тип двигателя - ' + AutoTransport.engineType + '<br><br>';
      a+='Среда использования - ' + AutoTransport.environment + '</div>';
      //Функция добавить-убрать
                   if($('.auto').hasClass('done')){
                        	$('.transport-all').remove();
                        	$('.auto').removeClass('done');

                   }else{
      	                     $('.auto').addClass('done');
		                      $('.auto').append(a);
        }
	});
});

//Кнопка свойств метки "Самолеты"
$(document).ready(function(){
	$('.plane').on('click','.transport-all-properties', function(){
		//Промежуточная переменная , хранящая в себе HTML-эементы
      let m = '';
      m+='<div class = "transport-all">Назначение - ' + AirTransport.use + '<br><br>';
      m+='Классификация - ' + AirTransport.classification + '<br><br>';
      m+='Тип двигателя - ' + AirTransport.engineType + '<br><br>';
      m+='Среда использования - ' + AirTransport.environment + '<br><br>';
      m+='Высота полета - ' + AirTransport.flightAltitude + '</div>';
        //Функция добавить-убрать
                   if($('.plane').hasClass('on')){
                        	$('.transport-all').remove();
                        	$('.plane').removeClass('on');

                   }else{
      	                     $('.plane').addClass('on');
		                      $('.plane').append(m);
        }
	});
});

//Кнопка свойств метки "Корабли"
$(document).ready(function(){
	$('.ship').on('click','.transport-all-properties', function(){
		//Промежуточная пременная, хранящая HTML-элементы
      let g = '';
      g+='<div class = "transport-all">Назначение - ' + WaterTransport.use + '<br><br>';
      g+='Классификация - ' + WaterTransport.classification + '<br><br>';
      g+='Тип двигателя - ' + WaterTransport.engineType + '<br><br>';
      g+='Среда использования - ' + WaterTransport.environment + '<br><br>';
      g+='Водоизмещение - ' + WaterTransport.displacement + '</div>';
      //Функция добавить-убрать
                   if($('.ship').hasClass('on')){
                        	$('.transport-all').remove();
                        	$('.ship').removeClass('on');
                   }else{
      	                     $('.ship').addClass('on');
		                      $('.ship').append(g);
        }
	});
});