import React from 'react'

const Contact = () => {
  return (
		<div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
			<ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
				<li className="flex items-center py-3 text-sm">
					<span>Contact no </span>
					<span className="ml-auto">86t273,3623873</span>
				</li>
				<li className="flex items-center py-3 text-sm">
					<span>Email Us</span>
					<span className="ml-auto">support@BailRecknoner</span>
				</li>
				<li className="flex items-center py-3 text-sm">
					<span>Frequently asked questions </span>
					<span className="ml-auto">asdk ksad</span>
				</li>
			</ul>
		</div>
	);
}

export default Contact