import React from "react";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Entries from './components/Home/Entries';
import Private from "./components/Private";
import Header3 from './components/Header/Header3';
import Favourite from './components/Home/Favourite';

const App = () => {
	return <div>
		<BrowserRouter>
			<Header3 />
			<Routes>
				<Route path="/" element={
					<Home /> } />
				<Route path="/signIn" element={ <SignIn /> } />
				<Route path="/signUp" element={ <SignUp /> } />
				<Route path="/favourite" element={ <Favourite /> } />
				<Route path="/addEntries" element={
					<Entries /> } />
			</Routes>
		</BrowserRouter>
	</div>;
};

export default App;
