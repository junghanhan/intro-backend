const skills = [
  {
    "skills": [
      {
        "id": 0,
        "name": "C++",
        "desc":"Donect ultrices vel ligula sed interdum. Sed condimentum enim nulla, lobortis pellentesque enim molestie et. Nulla neque massa, convallis ac lectus in, ullamcorper finibus felis. Quisque sed neque auctor, consequat mi eget, ornare ipsum. Pellentesque in nibh interdum, lacinia purus et, hendrerit diam. Donec auctor accumsan elit sed bibendum. Maecenas congue fringilla sapien eu elementum. Proin auctor lacinia nulla a pellentesque. Suspendisse sit amet ipsum nulla. Vestibulum convallis eros et gravida condimentum. Duis sodales ac arcu et semper. Duis lobortis enim molestie, pulvinar ante sit amet, consectetur dui. \n\nQuisque semper nisl posuere scelerisque sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo dui non aliquet pretium.",
        "imageUrl":"/cpp.png"
      },
      {
        "id": 1,
        "name": "C#",
        "desc":"Donecx ultrices vel ligula sed interdum. Sed condimentum enim nulla, lobortis pellentesque enim molestie et. Nulla neque massa, convallis ac lectus in, ullamcorper finibus felis. Quisque sed neque auctor, consequat mi eget, ornare ipsum. Pellentesque in nibh interdum, lacinia purus et, hendrerit diam. Donec auctor accumsan elit sed bibendum. Maecenas congue fringilla sapien eu elementum. Proin auctor lacinia nulla a pellentesque. Suspendisse sit amet ipsum nulla. Vestibulum convallis eros et gravida condimentum. Duis sodales ac arcu et semper. Duis lobortis enim molestie, pulvinar ante sit amet, consectetur dui. \n\nQuisque semper nisl posuere scelerisque sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo dui non aliquet pretium. ",
        "imageUrl":"/csharp.png"
      },
      {
        "id": 2,
        "name": "Javascript",
        "desc":"Doneac ultrices vel ligula sed interdum. Sed condimentum enim nulla, lobortis pellentesque enim molestie et. Nulla neque massa, convallis ac lectus in, ullamcorper finibus felis. Quisque sed neque auctor, consequat mi eget, ornare ipsum. Pellentesque in nibh interdum, lacinia purus et, hendrerit diam. Donec auctor accumsan elit sed bibendum. Maecenas congue fringilla sapien eu elementum. Proin auctor lacinia nulla a pellentesque. Suspendisse sit amet ipsum nulla. Vestibulum convallis eros et gravida condimentum. Duis sodales ac arcu et semper. Duis lobortis enim molestie, pulvinar ante sit amet, consectetur dui. \n\nQuisque semper nisl posuere scelerisque sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo dui non aliquet pretium.",
        "imageUrl":"/js.png"
      },
      {
        "id": 3,
        "name": "HTML, CSS",
        "desc":"Dognec ultrices vel ligula sed interdum. Sed condimentum enim nulla, lobortis pellentesque enim molestie et. Nulla neque massa, convallis ac lectus in, ullamcorper finibus felis. Quisque sed neque auctor, consequat mi eget, ornare ipsum. Pellentesque in nibh interdum, lacinia purus et, hendrerit diam. Donec auctor accumsan elit sed bibendum. Maecenas congue fringilla sapien eu elementum. Proin auctor lacinia nulla a pellentesque. Suspendisse sit amet ipsum nulla. Vestibulum convallis eros et gravida condimentum. Duis sodales ac arcu et semper. Duis lobortis enim molestie, pulvinar ante sit amet, consectetur dui. \n\nQuisque semper nisl posuere scelerisque sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo dui non aliquet pretium.",
        "imageUrl":"/css_html.png"
      },
      {
        "id": 4,
        "name": "React.JS",
        "desc":"Donhjec ultrices vel ligula sed interdum. Sed condimentum enim nulla, lobortis pellentesque enim molestie et. Nulla neque massa, convallis ac lectus in, ullamcorper finibus felis. Quisque sed neque auctor, consequat mi eget, ornare ipsum. Pellentesque in nibh interdum, lacinia purus et, hendrerit diam. Donec auctor accumsan elit sed bibendum. Maecenas congue fringilla sapien eu elementum. Proin auctor lacinia nulla a pellentesque. Suspendisse sit amet ipsum nulla. Vestibulum convallis eros et gravida condimentum. Duis sodales ac arcu et semper. Duis lobortis enim molestie, pulvinar ante sit amet, consectetur dui. \n\nQuisque semper nisl posuere scelerisque sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo dui non aliquet pretium.",
        "imageUrl":"/reactjs.png"
      },
      {
        "id": 5,
        "name": "MongoDB",
        "desc":"Donejjc ultrices vel ligula sed interdum. Sed condimentum enim nulla, lobortis pellentesque enim molestie et. Nulla neque massa, convallis ac lectus in, ullamcorper finibus felis. Quisque sed neque auctor, consequat mi eget, ornare ipsum. Pellentesque in nibh interdum, lacinia purus et, hendrerit diam. Donec auctor accumsan elit sed bibendum. Maecenas congue fringilla sapien eu elementum. Proin auctor lacinia nulla a pellentesque. Suspendisse sit amet ipsum nulla. Vestibulum convallis eros et gravida condimentum. Duis sodales ac arcu et semper. Duis lobortis enim molestie, pulvinar ante sit amet, consectetur dui. \n\nQuisque semper nisl posuere scelerisque sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse commodo dui non aliquet pretium.",
        "imageUrl":"/mongodb.png"
      }
    ]
  }
];

const getAllSkills = (req, res) => {
  try {
    res.status(200).json(skills);
  } catch(err) {
    res.status(400).send("Bad Request");
  }
};

export { getAllSkills };