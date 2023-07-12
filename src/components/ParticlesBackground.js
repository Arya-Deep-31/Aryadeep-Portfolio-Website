// import React, { useCallback } from 'react'
// import { Particles } from 'react-tsparticles';
// import { loadFull } from 'tsparticles';


// const ParticlesBackground = () => {

//   //init
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);

//   }, []);

//   const particlesLoaded = useCallback(async () => { }, []);

//   return (
//     <Particles className=' w-full h-[60%] lg:h-full absolute translate-z-10' id='tsparticles' init={particlesInit} loaded={particlesLoaded}
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: {
//             value: ''
//           },
//         },
//         fps_limit: 160,
//         interactivity: {
//           events: {
//             onclick: {
//               enable: false,
//               mode: 'push',

//             },
//             onHover: {
//               enable: true,
//               mode: 'repulsive',

//             },
//             resize: true,
//           },
//           modes: {
//             push: {
//               quantity: 200,
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4,

//             }
//           }
//         },
//         particles: {
//           color: {
//             value: '#D6C9DE',
//           },
//           links: {
//             color: '#9B7CAE',
//             distance: 100,
//             enable: true,
//             opacity: 0.8,
//             width: 1
//           },
//           collisions: {
//             enable: true,
//           },
//           move: {
//             directions: 'none',
//             enable: true,
//             outModes: {
//               default: 'bounce'
//             },
//             random: false,
//             speed: 2,
//             straight: false

//           },
//           number: {
//             density: {
//               enable: true,
//               area: 500,

//             },
//             value: 70
//           },
//           opacity: {
//             value: 0.5,
//           },
//           shape: {
//             type: 'circle'
//           },
//           size: {
//             value: { min: 1, max: 5 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />

//   );


// };

// export default ParticlesBackground

