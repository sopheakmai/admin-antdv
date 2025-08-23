import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (_event) => {
  const body = await readBody(_event);

  const dataList = [
    {
      id: 1,
      name: "The first task",
      value: "2000",
      remark: "Life is so short，And forgetting is so long",
    },
    {
      id: 2,
      name: "Ant Design Vue",
      value: "200",
      remark: "Sometimes，you have to enter other people is worlds to find out what is missing in your own",
    },
    {
      id: 3,
      name: "Vue",
      value: "2010",
      remark: "Life is so short，And forgetting is so long",
    },
    {
      id: 4,
      name: "Vite",
      value: "20300",
      remark: "Hope is a beautiful thing，Maybe the best of things",
    },
    {
      id: 5,
      name: "React",
      value: "2000",
      remark: "People are not born great，They grow great",
    },
    {
      id: 6,
      name: "Lite Template",
      value: "2000",
      remark: "No matter when or where，itisnever too late to do what you want to do",
    },
    {
      id: 7,
      name: "Webpack",
      value: "2000",
      remark: "You have to keep moving forward，Otherwise you wonot know what life will give you next",
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
    data: {
      records: data,
      total: data.length,
    },
  };
});
