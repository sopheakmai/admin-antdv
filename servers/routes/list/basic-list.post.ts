import dayjs from "dayjs";
import { defineEventHandler } from "h3";

function cloneDeep<T>(obj: T): T {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (obj instanceof Date)
    return new Date(obj.getTime()) as T;
  if (Array.isArray(obj))
    return obj.map(item => cloneDeep(item)) as T;
  if (typeof obj === "object") {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = cloneDeep(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
}

export default defineEventHandler(async (_event) => {
  const dataList = [
    {
      title: "Aipay",
      link: "https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png",
      percent: 57,
      content: "Life is so short，And forgetting is so long",
    },
    {
      title: "Ant Design Vue",
      link: "https://www.antdv.com/assets/logo.1ef800a8.svg",
      percent: 60,
      status: "active",
      content: "Only in dreams，can a person be truly free",
    },
    {
      title: "Vue",
      link: "https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png",
      percent: 70,
      status: "exception",
      content: "Life is like a box of chocolates，The results are often unexpected",
    },
    {
      title: "Vite",
      link: "https://cn.vitejs.dev/logo.svg",
      percent: 100,
      status: "active",
      content: "Sometimes，you have to enter other peopleisworlds to find out whatismissing in your own",
    },
    {
      title: "React",
      link: "https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png",
      percent: 50,
      status: "exception",
      content: "Hope is a beautiful thing，Maybe the best of things",
    },
    {
      title: "Antdv Pro",
      link: "/logo.svg",
      percent: 80,
      status: "active",
      content: "People are not born great，They grow great",
    },
    {
      title: "Webpack",
      link: "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png",
      percent: 58,
      content: "No matter when or where，itisnever too late to do what you want to do",
    },
    {
      title: "Angular",
      link: "https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png",
      percent: 70,
      status: "active",
      content: "You have to keep moving forward，Otherwise you wonot know what life will give you next",
    },
  ];

  const data: any[] = [];

  // Data replication
  for (let i = 0; i < 1000; i++) {
    const arr = cloneDeep(dataList);
    data.push(...arr);
  }

  // Configure task time
  for (let i = 0; i < data.length; i++)
    data[i].start = dayjs().subtract(i, "hour").format("YYYY-MM-DD HH:mm");

  return {
    code: 200,
    msg: "Successfully retrieved",
    data,
  };
});
