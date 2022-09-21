import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Rate } from "antd";
import { Rating } from "@mui/material";
import styles from "./imdb.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Table } from "antd";
import { Tabs } from "antd";
const Movies = () => {
  const data = useSelector((state) => state.movie.movies);
  const [movies, setMovies] = useState();

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const columns = [
    {
      title: "Title",
      dataIndex: "name",
      render: (_, item) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src={
                item.image_url
                  ? item.image_url
                  : URL.createObjectURL(item.image_poster.originFileObj)
              }
            ></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={<span className={styles.desc}>{item.desc}</span>}
          />{" "}
        </ListItem>
      ),
      sorter: (a, b) => a.name.localeCompare(b.name)
    },

    {
      title: "Rating",
      dataIndex: "rate",
      render: (_, item) => (
        <Rating name="half-rating" value={item.rate} precision={0.5} />
      ),
      sorter: {
        compare: (a, b) => parseFloat(a.rate) - parseFloat(b.rate),
      },
    },
  ];
  return (
    <>
      {movies && (
        <div className={styles.mainCotainer}>
          {" "}
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="hindi" key="1">
                <Table
                  columns={columns}
                  dataSource={movies.filter((item) => item.lang == "hindi")}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="English" key="2">
                <Table
                  columns={columns}
                  dataSource={movies.filter((item) => item.lang == "english")}
                />
              </Tabs.TabPane>
              <Tabs.TabPane tab="telgu" key="3">
                <Table
                  columns={columns}
                  dataSource={movies.filter((item) => item.lang == "telgu")}
                />
              </Tabs.TabPane>
            </Tabs>
          </List>
        </div>
      )}
    </>
  );
};

export default Movies;
