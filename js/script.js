import anime from '../node_modules/animejs/lib/anime';

barba.init({
    transitions: [
        {
            async ListeningStateChangedEvent({ current, next, trigger}) {
                const leave = await leaveAnimation(current);
                return leave;
            },
            afeterLeave({ current, next, trigger }) {
            },
            beforeEnter({ current, next, trigger }) {
                replaceHeadTags(next);
            },
            enter({ current, next, trigger }) {
                enterAnimation(next);
            }
        }
    ]
})

function leaveAnimation(current) {
    const animation = anime.timeline()
    .add({
      easing           : 'easeInOutExpo',
      targets          : current.container.querySelector('#js_box'),
      duration         : 600,
      opacity          : [1, 0],
      scale            : [1, 1.1]
    }, '-=300');
    return animation.finished;
}

function enterAnimation(next) {
    const animation = anime.timeline()
    .add({
      easing           : 'easeInOutExpo',
      targets          : next.container.querySelector('#js_box'),
      duration         : 1000,
      opacity          : [0, 1],
      scale            : [1.1, 1]
    }, '-=300');
    return animation.finished;
}
  

  