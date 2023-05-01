import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SidebarLayout from './layouts/SidebarLayout';
import Home from './pages/Home.jsx';
import Charts from "./pages/Charts.jsx";
import Tables from "./pages/Tables";

function App() {
	return (
		<BrowserRouter>
			{/* Sidebar Layout */}
			<Routes>
				<Route element={<SidebarLayout />}>
					<Route path='/' element={<Home />}></Route>
					<Route path='/charts' element={<Charts />}></Route>
					<Route path='/tables' element={<Tables />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

/*
*
Item
 - Code
 - Type (Trouser, Tops, Jeans, Shorts, Sweaters)
 - Sizing

Type
 - TypeID
 - TypeName

Transaction
 - Type (Debit, Credit)
 - Amount

Sizing
 - Waist
 - Hips
 - Rise
 - Length
 - ItemID

Order_Item
 - ItemID
 - OrderID

Order
 - OrderID
 - PaymentID

Payment
 - TransactionID
 - CustomerID
 - PaymentID
 - OrderID

PaymentVerification
 - PaymentVerificationID
 - UserID
 - PaymentID


CollectionItem
 - ItemID
 - CollectionID

Collection
 - CollectionID
 - CollectionName

*
*  */
