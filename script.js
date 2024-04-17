var container = document.getElementById("container");
setTimeout(() => {
  container.innerHTML = "<b>count:10</b>";
  setTimeout(() => {
    container.innerHTML = "<b>count:9</b>";
    setTimeout(() => {
      container.innerHTML = "<b>count:8</b>";
      setTimeout(() => {
        container.innerHTML = "<b>count:7</b>";
        setTimeout(() => {
          container.innerHTML = "<b>count:6</b>";
          setTimeout(() => {
            container.innerHTML = "<b>count:5</b>";
            setTimeout(() => {
              container.innerHTML = "<b>count:4</b>";
              setTimeout(() => {
                container.innerHTML = "<b>count:3</b>";
                setTimeout(() => {
                  container.innerHTML = "<b>count:2</b>";
                  setTimeout(() => {
                    container.innerHTML = "<b>count:1</b>";
                    setTimeout(() => {
                      container.innerHTML = "<b>happy independence day</b>";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
