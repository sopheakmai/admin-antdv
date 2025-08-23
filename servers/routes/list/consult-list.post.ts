import dayjs from "dayjs";
import { defineEventHandler, readBody } from "h3";

enum STATUS {
  OFF = "0",
  RUNNING = "1",
  ONLINE = "2",
  ERROR = "3",
}

export default defineEventHandler(async (_event) => {
  const body = (await readBody(_event)) as { name?: string };

  const dataList = [
    {
      id: 1,
      name: "The first task",
      callNo: 2000,
      desc: "Life is so short，And forgetting is so long",
      status: STATUS.ONLINE,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
    },
    {
      id: 2,
      name: "Ant Design Vue",
      callNo: 200,
      desc: "Sometimes，you have to enter other people is worlds to find out what is missing in your own",
      status: STATUS.OFF,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
    },
    {
      id: 3,
      name: "Vue",
      callNo: 2010,
      desc: "Life is so short，And forgetting is so long",
      status: STATUS.ERROR,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
    },
    {
      id: 4,
      name: "Vite",
      callNo: 20300,
      desc: "Hope is a beautiful thing，Maybe the best of things",
      status: STATUS.ERROR,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
    },
    {
      id: 5,
      name: "React",
      callNo: 2000,
      desc: "People are not born great，They grow great",
      status: STATUS.ONLINE,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
    },
    {
      id: 6,
      name: "Lite Template",
      callNo: 2000,
      desc: "No matter when or where，itisnever too late to do what you want to do",
      status: STATUS.OFF,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
    },
    {
      id: 7,
      name: "Webpack",
      callNo: 2000,
      desc: "You have to keep moving forward，Otherwise you wonot know what life will give you next",
      status: STATUS.ONLINE,
      updatedAt: dayjs().format("YYYY-MM-DD HH:mm"),
    },
  ];
  const data = dataList.filter((i) => {
    if (body.name)
      return body.name === i.name;
    else return true;
  });
  return {
    code: 200,
    msg: "Successfully retrieved",
    data,
  };
});
