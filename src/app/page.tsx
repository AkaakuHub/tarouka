"use client";

import { Button, Grid2, TextField } from "@mui/material";
import type React from "react";
import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
  const [userInput, setUserInput] = useState("");
  const [resultText, setResultText] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUserInput(input);
    const result = `${input.split("").join("゛")}゛`;
    setResultText(result);
  }

  const copyHandler = () => {
    try {
      navigator.clipboard.writeText(resultText);
      toast.success("コピーしました！");
    } catch (error) {
      console.error(error);
      toast.error("コピーに失敗しました");
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid2
        container
        spacing={2}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ height: "100dvh" }}
      >
        <TextField value={userInput} onChange={inputHandler} sx={{
          width: "80%",
        }} id="filled-basic" label="ここに入力" variant="filled"
        />
        <ArrowDownwardIcon />
        <TextField value={resultText} sx={{
          width: "80%",
        }}
          id="outlined-basic" label="結果" variant="outlined"
          inputProps={{ readOnly: true }}
        />
        <Button variant="contained" onClick={() => { copyHandler() }}>
          コピーする
        </Button>
      </Grid2>
    </>
  );
}