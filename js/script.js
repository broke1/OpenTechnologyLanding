'use strict'

window.addEventListener('load',function () {


    new Vue ({
      el: ".menu-block",
      data: {
          logo: 'img/logo.svg',
          menus: [
            {
              label: 'О продукте',
              url: '.razdelitel'
            },
            {
              label: 'Кейсы',
              url: '.how-do'
            },
            {
              label: 'Контакты',
              url: '.footer'
            }
          ]
      }
  })

  document.querySelectorAll(".menu-link").forEach( item => {
        item.addEventListener('mouseover', () => {
            item.classList.add("menu-link-hover");          
        })
        item.addEventListener('mouseout', () => {
          item.classList.remove("menu-link-hover");          
      })
  });



    
      $(".menu-itself").on("click","a", function (event) {
    
              event.preventDefault();
    
       
    
              //забираем идентификатор бока с атрибута href
    
              let id  = $(this).attr('href'),
    
       
    
              //узнаем высоту от начала страницы до блока на который ссылается якорь
    
                  top = $(id).offset().top;
    
    
              //анимируем переход на расстояние - top за 1500 мс
    
              $('body,html').animate({scrollTop: top}, 1000);
    
          });
    
    
  
   
    new Vue ({
        el: ".behind-block",
        data: {
            zagolovok: "Платформа Atlas",
            about: `комплексное технологическое решение на основе платформенного подхода, ориентированное на предупреждение отказов,
             выявления негативных, нежелательных сценариев в работе сложных комплексов оборудования и сложных систем `,
        }
    })


    new Vue ({
      el: ".slider-about",
      data: {
         abouts: [
           {
            img: "img/img-about-1.png",
            zagolovok: "ПРОДВИНУТАЯ <br> ПРЕДИКТИВНАЯ АНАЛИТИКА",
            text: `
            Предлагаемая базовая платформа вне комплексного подхода соответствует современному уровню развития систем предиктивной аналитики, которые существуют на глобальном рынке.
            <br><br>
            При этом дополнительным ее важным достоинством, способным обеспечить интерес пользователя, является то, что она свободно распространяется с открытым исходным кодом (Open Source). 
                `
            },
            {
              img: "img/img-about-2.png",
              zagolovok: "ИНТЕРПРЕТИРУЕМОСТЬ <br> МОДЕЛЕЙ ",
              text: `
              Частью предлагаемой платформы являются язык SML и методика в базовой версии ее изложения. Язык SML, являющийся частью предлагаемого комплексного решения, позволяет осуществлять интерпретируемость моделей.
              <br><br>
              В настоящий момент такая возможность не предоставляется никакими конкурентными платформе решениями. `
            },
            {
              img: "img/img-about-3.png",
              zagolovok: "ЭФФЕКТИВНАЯ И <br> КОЛЛЕКТИВНАЯ БЕЗОПАСНОСТЬ",
              text: `
              Объекты на плоскости зонтик над ними или щит защищающий от негатива или опасности. 
              <br><br>
              ATLAS – это первое решение на глобальном рынке, которое вводит понятие миссии
              коллективной безопасности участников рынков в самых разнообразных сегментах. Создает эффективный инструмент для обеспечения данной миссии.
              `
            },
            {
              img: "img/img-about-4.png",
              zagolovok: "НЕ БЫТЬ ВТОРЫМ! ",
              text: `
              В методике и SML реализован ряд сценариев, позволяющих описывать режимы нормального функционирования объектов, 
              что позволяет выявлять и прогнозировать отказы даже в том случае, когда таких отказов не наблюдалось в истории.`
            },
            {
              img: "img/img-about-2.png",
              zagolovok: "УМНОЕ <br> ПРОФИЛИРОВАНИЕ",
              text: `
              В методике и SML реализован ряд сценариев, позволяющих описывать режимы нормального функционирования объектов, 
              что позволяет выявлять и прогнозировать отказы даже в том случае, когда таких отказов не наблюдалось в истории.”. `
            },

         ]
      }
  })

  $('.slider-about').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }); 


    let last_scroll = window.pageYOffset;
    let behind_block = document.querySelector('.behind-block');
    //let menu_present = document.querySelector('.menu-present');

    let bottom_achivment = {};

    let canvas = {};
    let number ={};

    let flag = 0;
   
    let magic_number = 200;
    let magic_number_achivment = 150;

    if (screen.width < 1000){
      magic_number = -100;
    }
    if (screen.width < 500){
      magic_number_achivment = 0;
    }

    
    let menu_block = document.querySelector('.menu-block');


    window.onscroll = () => {


         let current_scroll = window.pageYOffset;

        
         current_scroll == 0 ? menu_block.style.background = "transparent" : menu_block.style.background = "rgba(30, 38, 73, 0.6)"
         current_scroll == 0 ? menu_block.querySelector(".container").style = "margin: 50px auto" : menu_block.querySelector(".container").style = "margin: 10px auto"
 
          if (current_scroll > last_scroll) {

            // menu_present = document.querySelector('.menu-present');



            document.querySelectorAll(".project-itself").forEach( (item,i) => {
              let otstup = 0;
              if (i == 1) {
                otstup = 200;
              }
              if (i == 2) {
                otstup = -200;
              }
              if ((item.getBoundingClientRect().bottom - screen.height +  magic_number_achivment + otstup) < 0) {
                item.classList.add('project-full-show'); 
            }
            });
            
            // if (behind_block.getBoundingClientRect().top < 0) {
            //     menu_present.classList.add('fixed-menu-present');

            // }

            bottom_achivment = document.querySelectorAll('.achivment-item');

            bottom_achivment.forEach(function(item) {
              if ((item.getBoundingClientRect().bottom - screen.height +  magic_number_achivment) < 0) {
                  item.classList.add('achivment-item-show'); 
              }
           });  

            canvas = document.querySelectorAll('.circle');

           

           canvas.forEach(item => {
              number = item.parentElement.querySelector('.circle-numbers');

              if (screen.width < 500) {
                number.parentElement.classList.add('circle-block-show');
                if (flag < 3) {
                createCircle(item,number); 
                }
                flag += 1;
              } else {
                    if (item.parentElement.parentElement.getBoundingClientRect().bottom - screen.height + magic_number < 0) {
          
                      number.parentElement.classList.add('circle-block-show');
                      if (flag < 3) {
                        createCircle(item,number); 
                      }
                      flag += 1;
                    };   
              }

             
           });

          
            } else {

                // if (current_scroll < behind_block.getBoundingClientRect().top) {
                //     menu_present.classList.remove('fixed-menu-present');
                // }

                document.querySelectorAll(".project-itself").forEach( item => {
                  if ((item.getBoundingClientRect().bottom - screen.height +  magic_number_achivment) > 0) {
                    item.classList.remove('project-full-show'); 
                }
                });

                bottom_achivment = document.querySelectorAll('.achivment-item');

                bottom_achivment.forEach(function(item) {
                  if ((item.getBoundingClientRect().bottom - screen.height +  magic_number_achivment) > 0) {
                      item.classList.remove('achivment-item-show'); 
                  }
               });  
            }

         last_scroll = current_scroll;
    }


    Vue.component('achive-items', {
        props: ['achivments'],
        template: `
            <div class="achivment-item">   
                <div class="achivment-img"><img :src="achivments.img"></div>
                <p class="zagolovok-achivment" v-html="achivments.zagolovok"></p>
            </div>
        `
      })

      new Vue({
          el: '.achivment',
          data: {
            achivments: [
                { img: "img/achivment-1.png", zagolovok: "Коллективная <br> безопасность"},
                { img: "img/achivment-2.png", zagolovok: "Искусственный <br> интеллект"},
                { img: "img/achivment-3.png", zagolovok: "Опыт <br> экспертов"},
            ],
          }
      })

    let projects_obj =   new Vue({
        el: '.project-block',
        data: {
          projects: [
              { click: false,
                text: `С помощью платформы Atlas можно выполнять долгосрочное прогнозирование достаточности ресурсов IT-инфраструктуре или же выполнять краткосрочное прогнозирование
                      IT-инцидентов `, 
                text_full: `С помощью платформы Atlas можно выполнять долгосрочное прогнозирование достаточности ресурсов IT-инфраструктуре вследствие роста бизнеса или же выполнять краткосрочное прогнозирование
                            IT-инцидентов на основе выявленных устойчивых взаимодействий между компонентами системы.
                            В качестве заказчиков могут выступать объекты 
                            с крупной и развитой IT-инфраструктурой: системы, управляющие промышленными предприятиями, банки, телеком-операторы. <br><br>
                            Atlas выявляет глубокие зависимости между бизнес-метриками, описывающими внешнюю поступающую нагрузку на IT-системы, 
                            и инфраструктурными метриками, непосредственно выражающими загруженность элементов (серверов, кластеров, сетевого оборудования).<br><br>
                              В результате работы системы заказчик получает рекомендации по балансировке оборудования, оценку недостающих ресурсов, 
                              инструмент для what-if анализа и раннего определения развивающегося инцидента.`,
                zagolovok: "IT-инфраструктура",
                img: "img/project-img-1.png"},
              { click: false,
                text: "Платформа Atlas позволяет выполнять прогнозирование отказов / аварий на критичных объектах железнодорожной инфраструктуры",
                text_full: `Платформа Atlas позволяет выполнять прогнозирование отказов / аварий на критичных объектах железнодорожной инфраструктуры:
                      это могут быть как непосредственно объекты, осуществляющие перевозку (например, локомотивы), 
                      так и объекты обеспечивающей инфраструктуры (станции, ремонтные депо и пр.).  <br><br> 
                      Подобный подход в перспективе позволит перейти от планового 
                      технического обслуживания (сейчас это регламентные времена и пробеги между ТО) к обслуживанию по фактическому техническому состоянию.  <br><br>
                      Прогнозирование отказов локомотивов также позволит заранее готовить подменные локомотивы на смену ушедшим на ТО, что приведет к оптимизации
                        перевозок и сокращению времени простоев поездов.`,
                zagolovok: "Логистика и перевозки",
                img: "img/project-img-2.png"},
              { click: false,
                text: "С помощью Atlas можно выполнять прогнозирование “неблагоприятного стечения обстоятельств” на критичных станциях и узлах энергетической инфраструктуры.", 
                text_full: `С помощью Atlas можно выполнять прогнозирование “неблагоприятного стечения обстоятельств” на критичных станциях и узлах энергетической инфраструктуры. <br><br>
                      Для этой отрасли наиболее применим принцип “коллективной безопасности”, так как здесь присутствует большое количество похожих,
                        однотипных объектов моделирования, по которым можно собрать обширную общую статистику по особенностям режимов работы и моментам отказов.`,
                zagolovok: "Энергетика",
                img: "img/project-img-3.png"},
              { click: false, 
                text: "Объекты нефтегазовой отрасли традиционно сложны для моделирования с помощью математических методов", 
                text_full: `Объекты нефтегазовой отрасли традиционно сложны для моделирования с помощью математических методов: 
                        дифференциальными уравнениями или переходными процессами. Но большое количество однотипных объектов (газоперекачивающих агрегатов, скважин и т.п.) 
                        позволяет собрать обширную статистику по особенностям режимов работы объектов в разных условиях и составить устойчивую модель нормального функционирования
                        и взаимосвязи показателей процессов.  <br><br>
                        Кроме того, большое количество экспертов в предметной области позволяет учитывать их опыт при итерационном построении
                          и валидации моделей, что является одной из важных особенной Atlas. <br><br>
                           С помощью “цифрового выражения” знаний экспертов Atlas уточняет свои прогностические модели,
                          что позволяет более точно выявлять предикторы отказов и аварий.`,
                zagolovok: "Oil & Gas",
                img: "img/project-img-4.png"},
          ],
        }
    })

    document.querySelectorAll(".project-itself").forEach( (item,i) => {
            item.addEventListener('click', () => {
                item.classList.add("project-full-itself");
                projects_obj.projects[i].click = true;
            });
    });

    document.querySelectorAll(".close-btn-project").forEach( (item,i) => {
      item.addEventListener('click', (event) => {
          event.stopPropagation(); 
          item.parentElement.classList.remove("project-full-itself");
          projects_obj.projects[i].click = false;
          
      });
    });

      


      Vue.component('modal-form', {
        props: ['settings'],
        template: `
          
              <div class="modal-form-itself">
                  <form action="/send/send.php" :class="settings.class_name" name="modal">
                      <div class="close-btn" v-if="settings.close_seen"></div>
                      <p class="zagolovok-form" v-if="settings.zagolovok_seen">{{settings.zagolovok}}</p>
                      <input type="text" name="name" placeholder="Имя" class="form-item">
                      <!-- <input type="text" name="phone" class="phone-form-modal form-item"  placeholder="Телефон" > -->
                      <input type="text" name="email" class="email-form-modal form-item"  placeholder="E-mail" >
                      
                      <div class="accept-block">
                        <input :id="settings.id" type="checkbox" name="accept" value="male">
                        <label :for="settings.id">Согласие на отправку обратного письма</label>
                      </div> 
                      <div class="description-accept hide">Согласитесь с отправкой письма</div>
                      <div  class="button-send-modal  form-item" >Заказать</div>
                  </form>
                  <div class="description hide">{{settings.description}}</div>
              </div>
        `
      })

     new Vue({
          el: '.form-section',
          data: {
            settings: 
                { 
                  zagolovok: "Закажите демонстрацию",
                  description: 'Ваша заявка принята',
                  close_seen: false,
                  zagolovok_seen: false,
                  id: 'simple-form',
                  class_name: 'simple'
                },
          }
      })

      new Vue({
        el: '.modal-form-show',
        data: {
          settings: 
              { 
                zagolovok: "Закажите демонстрацию",
                description: 'Ваша заявка принята',
                close_seen: true,
                zagolovok_seen: true,
                id: 'show-form',
                class_name: 'complicated'
              },
        }
    })
    

   // $(".phone-form-modal").mask("+7 (999) 999-99-99");



    // new Vue({
    //     el: '.circles',
    //     data: {
    //       circles: [
    //           { number: "25 000" },
    //           { number:  "25 000" },
    //           { number:  "25 000" },
    //       ]
    //     }
    // })

   
    // let clearHover =  function () {
    //   document.querySelectorAll('.offer-block').forEach(item=>{
    //     item.classList.remove('offer-block-hover');
    //  });
    // }

    // let hoverFunc = function() {
    //   clearHover();
    //  this.$el.classList.add('offer-block-hover');
     
    // }



    // Vue.component('offer-items', {
    //   props: ['offers'],
    //   template: `
    //       <div class="offer-block" @mouseover="hover" @mouseout="unhover" @click="hover">   
    //           <p class="zagolovok-offer">{{offers.zagolovok}}</p>
    //           <p class="text-offer">{{offers.text}}</p>
    //       </div>
    //   `,
    //   methods: {
    //     hover: hoverFunc,
    //     unhover: clearHover
        
        
    //   },
    // })


    //   new Vue({
    //     el: '.offer',
    //     data: {
    //       offers: [
    //           {  zagolovok: "Описание процесса номер 1",text: `Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить командыМы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить командыМы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды`},
    //           { zagolovok: "Описание процесса номер 2",text: `Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды`},
    //           {  zagolovok: "Описание процесса номер 3",text: `Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды`},
    //           {  zagolovok: "Описание процесса номер 4",text: `Мы проектировали  свой код
    //           так, чтобы любому человеку
    //           было интуитивно понятно
    //           как вводить команды`}, 
    //       ],
    //     },
    //     mounted: function() {
    //     let top = 5;
    //     let left = 10;
    //     if (screen.width < 1000) {
    //       left =0;
    //     }
        
    //      document.querySelectorAll('.offer-block').forEach(item => {
    //         top += 5;
    //         left += 5;
    //         item.style.top = top + "%";
    //         item.style.left = left + "%";
           
    //      });
    //     },
    //     methods: {
    //       clearHover : clearHover
    //     }
    // })

    let preloaderWidth = 500;
    let preloaderHeight = 500;

    if (screen.width < 500){
      preloaderWidth = 300;
      preloaderHeight = 300;
    }

    
     new Vue ({
      el: '.preloader-canvas',
      data: {
        width: preloaderWidth,
        height: preloaderHeight
      },
      mounted: function() {
        createPreloader();
      }
    });

    
   


    function createCircle(canvas,number) {

     let ctx = canvas.getContext('2d');
     ctx.lineWidth = 5;
     ctx.strokeStyle="#ffffff";
     let degree = 0;
     let number_begin = 0;
     let number_end = number.innerHTML;
     let number_iter = Math.round(parseInt(number_end.replace(/\D/g, '')) / 74);
     

           let  interval = setInterval(function(){
             ctx.beginPath();
             ctx.arc(150, 150, 125, 0, getRadians(degree));
             ctx.stroke();
             degree = parseInt(degree + 5);
             number.innerHTML = number_begin;
             number_begin += number_iter;
             if (degree == 370){
               clearInterval(interval);
               number.innerHTML = number_end;  
             }
            
       },20);
    }


     function getRadians(degrees) {
         return (Math.PI/180)*degrees;
     }


     document.querySelectorAll('.button-send-modal').forEach(item => {

        item.addEventListener('click', () => {
            
      
          let parrent = event.target.parentElement;

          let accept = parrent.querySelector('input[type="checkbox"]');
          let description = parrent.querySelector('.description-accept');
          if (accept.checked) { 
           // console.log(parrent);
            sendModal(parrent,item);
            }  else {
              description.classList.remove('hide');
              setTimeout(() =>{
                description.classList.add('hide');
                    }, 2000);
            }

        });
     });


    



      document.querySelector('.button-present').addEventListener('click', () => { 
        document.querySelector('.modal-form').classList.add('modal-form-show');
      });

      document.querySelector('.modal-form').addEventListener('click', (event) => { 
          if (event.target.classList.contains('close-btn')) {
              document.querySelector('.modal-form').classList.remove('modal-form-show');
          }
          if (event.target.classList.contains('shadow-back')) {
              document.querySelector('.modal-form').classList.remove('modal-form-show');
          }
      });
      




   //   document.forms.common 

      function sendModal(form,item) {

       
           let form_itself = item.parentElement;
           let description = form_itself.parentElement.querySelector('.description');
           let zagolovok = document.querySelector(".form-section .zagolovok");
           
            var formData = new FormData(form);
            
            


            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/send/send.php");
            xhr.send(formData);

            xhr.onreadystatechange = function() {
            if (this.readyState != 4) return;

            if (this.status != 200) {
            console.log( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );

            
         

            //   description.classList.remove('hide');
            //   form_itself.classList.add('hide');
            //   zagolovok.style.display = "none";

            //   if (form_itself.classList.contains('complicated')) {
                
            //     setTimeout(() =>{
            //       form_itself.parentElement.parentElement.classList.remove('modal-form-show');
            //     }, 2000);
            //   }

 
            return;
            } else {
              //console.log(this.responseText);


               description.classList.remove('hide');
              form_itself.classList.add('hide');
              zagolovok.style.display = "none";

              if (form_itself.classList.contains('complicated')) {
                
                setTimeout(() =>{
                  form_itself.parentElement.parentElement.classList.remove('modal-form-show');
                }, 2000);
              }
              
              
            //   setTimeout(()=>{
            //       document.querySelector('.modal-form').style.opacity = "0";
            //       document.querySelector('.modal-form').style.visibility = "hidden";
            //   }, 800);

            }

            }
      }


      function createPreloader() {

       


        let ctx = document.querySelector('.preloader-canvas').getContext('2d');
        ctx.lineWidth = 3;
        ctx.strokeStyle="#ffffff";
        ctx.fillStyle = "#ffffff";
        let begin = 250;
        let end = 250;
        let x = 0;
        let y = 0;
        let flag_inter = 0;
        let end_preloader = 450;
        if (screen.width < 500) {
          end_preloader = 250;
        }
  
  
       let main_inetrval =  setInterval(() => {
          if (flag_inter == 0) {
            x = getRandomInt(50, end_preloader);
            y = getRandomInt(50, end_preloader);
            createLine(x,y);
            flag_inter = 1;
          }
      }, 500);
  
  
        setTimeout(() => {
         
        clearInterval(main_inetrval);
        document.querySelector('.preloader').classList.add('preloader-hide');
        
        }, 3000);
  
  
  
        function getRandomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        
  
        function createLine(x,y) {
          ctx.beginPath();
          ctx.moveTo(begin, end);
          createDirection(x,y);
          
        } 
  
        function createDirection(x,y){
            let i = 0;
             
            let difX = Math.round(parseInt(x - begin) / 100 * 20);
            let difY = Math.round(parseInt(y - end) / 100 * 20);
            
            let inter = setInterval(() => {
              if (i > 4) {
                clearInterval(inter);
                
                ctx.arc(x, y, 3, 0, getRadians(360));
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                flag_inter = 0;
              } else {
                begin = begin + difX;
                end = end + difY;
                ctx.lineTo(begin, end);
                ctx.stroke();
                i++;
              }
              
            }, 100);
        }
      }
      

    
     

});