let i=0;
      let bills = document.querySelectorAll("img[src$='rub.jpg']");
      function getCoffee(name,price) {
        if (price<=money.value) {
          progress.parentElement.style.display="flex";
          info1.innerText="Кофе готовится...";
          money.value-=price;
          info2.innerText = money.value+"руб.";
          let timerId = setInterval(() => {
            progress.style.width = i+'%';
            i++;
            if (i>104) {
              clearInterval(timerId);
              info1.innerText = "Кофе готов!";
              i=0;
              progress.parentElement.style.display="none";
              progress.style.width='0%';
              coffee_cup.style.opacity=1;
            }
          }, 100);
          
        }
        else {
          info1.innerText = "Денег нет";
        }
        
      }
      
      for (let i=0; i<bills.length; i++) {
        bills[i].addEventListener('mousedown',dragAndDrop)
      }
      
      function dragAndDrop(event) {
        let bill = event.currentTarget;
        bill.ondragstart = function() {
          return false;
        };
        bill.style = "transform: rotate(90deg)";
        bill.style.position = 'absolute';
        bill.style.zIndex = 1000;
        moveAt(event.pageX, event.pageY);
        document.addEventListener('mousemove', onMouseMove);
        
        function moveAt(pageX, pageY) {
          bill.style.left = pageX - bill.offsetWidth / 2 + 'px';
          bill.style.top = pageY - bill.offsetHeight / 2 + 'px';
        }
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
        
        bill.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          let bill_top = bill.offsetTop-bill.offsetWidth/2;
          let bill_left = bill.getBoundingClientRect().x;
          let bill_right= bill_left+bill.offsetHeight;
          let bill_acc_top=bill_acc.offsetTop;
          let bill_acc_bottom=bill_acc.offsetTop+bill_acc.offsetHeight;
          let bill_acc_left = bill_acc.getBoundingClientRect().x;
          let bill_acc_right= bill_acc_left+bill_acc.offsetWidth;
          if (bill_top>bill_acc_top 
          && bill_top<bill_acc_bottom-(bill_acc.offsetHeight/3)*2
          && bill_acc_left<bill_left 
          && bill_acc_right>bill_right) {
            bill.style.display = "none";
            money.value= +bill.alt+(+money.value);
             let audio = new Audio("audio/coffee_machine_audio_banknotes.mp3");
              audio.play();
            info2.innerText = money.value+"руб.";
          }
          bill.style.zIndex = 1;
          bill.onmouseup = null;
          
        };
        
      }
      
      function getChange(sum) {
        let left = getRandom(0,change_tray.offsetWidth-70);
        let top = getRandom(0,change_tray.offsetHeight-70);
        if (sum>=10) {
          sum-=10;
          change_tray.innerHTML+=`<img onclick='this.style.display="none";' style='left:${left}px;top:${top}px;' src='img/10rub.png'>`;
          let audio = new Audio("audio/cofe.mp3");
          
        }
        else if (sum>=5){
            
          sum-=5;
          change_tray.innerHTML+=`<img onclick='this.style.display="none";' style='left:${left}px;top:${top}px;' src='img/5rub.png'>`;
        }
        else if (sum>=2){
          sum-=2;
          change_tray.innerHTML+=`<img onclick='this.style.display="none";' style='left:${left}px;top:${top}px;' src='img/2rub.png'>`;
        }
        else if (sum>=1) {
          sum-=1;
           change_tray.innerHTML+=`<img onclick='this.style.display="none";' style='left:${left}px;top:${top}px;' src='img/1rub.png'>`;
        }
        else {
                  
          money.value="";
          info2.innerText="Забрите сдачу";
          return;}
        getChange(sum);
        let audio = new Audio("audio/coffee_machine_audio_getchange.mp3");
      audio.play();

      }
      
      function getRandom(min,max) {
        return Math.random()*(max-min)+min;
      }