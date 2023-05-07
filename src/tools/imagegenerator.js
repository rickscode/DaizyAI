// import { ClipboardListIcon } from '@heroicons/react/solid';

// const obj = {
//   title: 'DaizyAI Image Generator',
//   desc: 'Create Engaging AI Generated Images',
//   category: 'Image',
//   Icon: ClipboardListIcon,
//   permissions: ['user'],
//   to: '/ai/Image/imagegenerator',
//   api: '/ai/Image/imagegenerator',
//   fromColor: 'gray-600',
//   toColor: 'gray-500',
//   output: {
//     title: 'Generated Images',
//     desc:'',
//   },
//   prompts: [
//     {
//       title: 'DaizyAI Image Generator',
//       desc: 'Create Engaging AI Generated Images',
//       prompts: [
//         {
//           title: 'Enter Instructions For Image',
//           attr: 'content',
//           value: '',
//           placeholder: 'AI',
//           label: '',
//           type: 'textarea',
//           maxLength: 300,
//           required: true,
//           error: '',
//           example: 'AI',
//         },
//       ],
//       example: {
//         output: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RX9osKp8btNRNpJUaLwfEBoS/user-mL3f5rM1H44QZj7TQpxat9XM/img-EeqJLCqTSM8D8kQxESj6MZlr.png?st=2023-04-30T04%3A20%3A04Z&se=2023-04-30T06%3A20%3A04Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-30T00%3A15%3A33Z&ske=2023-05-01T00%3A15%3A33Z&sks=b&skv=2021-08-06&sig=jVTQ/XBmJKrUrmI5Ee7kjBkD9PFCx8WtyZv08yfCNqg%3D',
//       },
//     },
//   ],
// };

// if (obj.prompts && obj.prompts[0].example && obj.prompts[0].example.output) {
//   const urls = obj.prompts[0].example.output.split('\n').filter(line => line.match(/^https?:\/\/.*$/))
//   const formattedUrls = urls.map(url => `<a href="${url}" target="_blank">${url}</a>`).join('<br>')
//   obj.output.desc = formattedUrls
// };


// export default obj;

import { ClipboardListIcon } from '@heroicons/react/solid';

const obj = {
  title: 'DaizyAI Image Generator',
  desc: '',
  category: 'Image',
  Icon: ClipboardListIcon,
  permissions: ['user'],
  to: '/ai/Image/imagegenerator',
  api: '/ai/Image/imagegenerator',
  fromColor: 'gray-600',
  toColor: 'gray-500',
  output: {
    title: 'Generated Images',
    desc: '',
  },
  prompts: [
    {
      title: 'DaizyAI Image Generator',
      desc: 'Create Engaging AI Generated Images',
      prompts: [
        {
          title: 'Enter Instructions For Image',
          attr: 'content',
          value: '',
          placeholder: 'AI',
          label: '',
          type: 'textarea',
          maxLength: 300,
          required: true,
          error: '',
          example: 'hyper realistic photo of a high end futuristic single-level house where walls are made of windows, light coming through the window, mid century modern style, cinematic lighting',
        },
      ],
      example: {
        output: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-RX9osKp8btNRNpJUaLwfEBoS/user-mL3f5rM1H44QZj7TQpxat9XM/img-P9L5CIfwQwqcEa6PPELgUAXL.png?st=2023-05-07T07%3A35%3A48Z&se=2023-05-07T09%3A35%3A48Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-07T00%3A39%3A35Z&ske=2023-05-08T00%3A39%3A35Z&sks=b&skv=2021-08-06&sig=BxYAVZwU1wAF754qbroUdZNPBvHRpX9SZzEHt/jHWw0%3D',
      },
    },
  ],
};

export default obj;

