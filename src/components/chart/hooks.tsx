function getIconUrlByName(name: any) {
  const iconMap: any = {
    "React.js": [
      "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png",
    ],
    TypeScript: [
      "https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp",
    ],
    JavaScript: [
      "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png",
    ],
    HTML: ["https://cdn-icons-png.freepik.com/512/919/919827.png"],
    CSS: ["[https://cdn-icons-png.flaticon.com/512/919/919826.png"],
    npm: [
      "https://cdn.iconscout.com/icon/free/png-256/free-npm-3521612-2945056.png",
    ],
    yarn: [
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_yarn_icon_130052.png",
    ],
    Storybook: [
      "https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png",
    ],
    "E-chart": ["https://echarts.apache.org/en/images/index-home-pie.png"],
    Mapbox: [
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/mapbox_logo_icon_169975.png",
    ],
    Webpack: [
      "https://cdn.iconscout.com/icon/free/png-256/free-webpack-3629741-3030792.png",
    ],
    SCSS: ["https://cdn-icons-png.flaticon.com/512/5968/5968358.png"],
    "RESTful API": [
      "https://cdn-icons-png.flaticon.com/512/10169/10169724.png",
    ],
    "C#": [
      "https://static-00.iconduck.com/assets.00/c-sharp-c-icon-456x512-9sej0lrz.png",
    ],
    ".NET": [
      "https://cdn.iconscout.com/icon/free/png-256/free-microsoft-dot-net-1-1175179.png",
    ],
    Java: [
      "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png",
    ],
    SQL: ["https://cdn-icons-png.freepik.com/512/8453/8453211.png"],
    Python: [
      "https://cdn.iconscout.com/icon/free/png-256/free-python-3521655-2945099.png?f=webp",
    ],
    MongoDB: [
      "https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png",
    ],
    Git: ["https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"],

    "Critical Thinking": [
      "https://cdn-icons-png.flaticon.com/512/3872/3872759.png",
    ],
    Creativity: ["https://cdn-icons-png.flaticon.com/512/5985/5985765.png"],
    Adaptability: ["https://cdn-icons-png.flaticon.com/512/10285/10285079.png"],
    Azure: [
      "https://visualstudiomagazine.com/articles/2021/05/18/~/media/ECG/visualstudiomagazine/Images/2021/05/new_azure_a.ashx",
    ],
    GitHub: [
      "https://qph.cf2.quoracdn.net/main-qimg-729a22aba98d1235fdce4883accaf81e",
    ],
    GitLab: [
      "https://cdn.iconscout.com/icon/free/png-256/free-gitlab-282507.png?f=webp",
    ],
    Teamwork: ["https://cdn-icons-png.flaticon.com/512/10008/10008010.png"],
    Communication: ["https://cdn-icons-png.flaticon.com/512/8632/8632658.png"],
    "Problem Solving": [
      "https://cdn-icons-png.flaticon.com/512/6487/6487594.png",
    ],
    "Time Management": [
      "https://cdn-icons-png.flaticon.com/512/4570/4570291.png",
    ],
    Romanian: [
      "https://icons.iconarchive.com/icons/custom-icon-design/flat-europe-flag/512/Moldova-icon.png",
    ],

    English: ["https://cdn-icons-png.flaticon.com/512/2314/2314759.png"],
    Russian: [
      "https://ih1.redbubble.net/image.3392761298.6500/st,small,507x507-pad,600x600,f8f8f8.jpg",
    ],
  };

  return (
    iconMap[name] ??
    "https://png.pngtree.com/png-vector/20230412/ourmid/pngtree-key-skills-line-icon-vector-png-image_6703008.png"
  );
}
export { getIconUrlByName };
