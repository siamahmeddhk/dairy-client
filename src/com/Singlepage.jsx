import React, {} from 'react';
import { Link } from 'react-router';

const Singlepage = ({page}) => {
    const {title, url, email} = page
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={url} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
			<p className="dark:text-gray-800">{email}</p>
		</div>
        <Link to=''>
        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Read more</button>
        </Link>
        <Link to=''>
        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-green-300 dark:text-gray-50">Edit</button>
        </Link>
        <Link to=''>
        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-red-500 dark:text-gray-50">Delete</button>
        </Link>
		
	</div>
</div>
        </div>
    );
};

export default Singlepage;