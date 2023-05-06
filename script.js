
  document.querySelectorAll('.giba').forEach(item => {
    item.addEventListener('mousemove', event => {
        const onepx = item.clientWidth*(1/100);
        const onepy = item.clientHeight*(1/100);
        const Y = event.offsetY;
        const X = event.offsetX;
        const ry = (Y / onepy)/100*32-16;
        const rx = (X / onepx)/100*32-16;
        const ryp = (Y / onepy);
        const rxp = (X / onepx);
        item.style.transform = "perspective(1000px) rotateX("+ry+"deg) rotateY("+rx+"deg) scale3d(1, 1, 1) ";
        item.style.transition = "0s";
        item.children[0].style.background = "radial-gradient(farthest-side at "+rxp+"% "+ryp+"%,rgba(255,255,255,0.2), rgba(0,0,0,0.2))";
    })
    item.addEventListener('mouseout', event => {
      item.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      item.style.transition = "1s";
      item.children[0].style.background = "";
    })
  })
  