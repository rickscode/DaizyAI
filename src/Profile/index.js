import React, { Component } from 'react';
import { Link, Switch, Route, } from 'react-router-dom'
import { computed, observable, makeObservable } from 'mobx'
import Header from '../Components/Header'
import { IdentificationIcon,  CheckIcon,
	ChatAltIcon, UsersIcon,UserCircleIcon, ReplyIcon, ChevronLeftIcon,
} from '@heroicons/react/outline'
import MainBody from '../Components/Body'
import Referral from './Referral'
import {Helmet} from "react-helmet";
import EnvIcon from './EnvIcon'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class Body extends Component {
	render() {
	return (
		<>
			<Header 
				title={this.props.store.profile.email}
				desc={`${this.props.store.profile.fname} ${this.props.store.profile.lname}`}
				category="Your Profile"
				Icon={UserCircleIcon}
				fromColor={this.fromColor}
				options={
					this.props.location.pathname !== "/my-profile" ? [{ title: "Back to Profile", Icon: ChevronLeftIcon, onClick: this.onBack }] : null
				}
			>
					<Route exact path="/my-profile">
						<Helmet>
							<title>{`My Profile - Daizy AI`}</title>
						</Helmet>
						
				</Route>

				</Header>
			<MainBody className="px-4 py-4 md:px-28 md:py-8 lg:py-12">

		
						<Grid>

							<ToolDiv 
								Icon={ReplyIcon}
								title={"Log Out"} 
								desc={"Sign out of your account"} 
								onClick={this.props.store.handleLogout}
								fromColor="gray-400"
								toColor="gray-400"
							/>
						</Grid>
		
			
</MainBody>
</>)
}
  }

const Grid = ({ children }) => <div className="grid grid-cols-1 gap-8 mt-4 lg:grid-cols-2 xl:grid-cols-3 ">{children}</div>

const ToolDiv = ({ Icon, title, desc, to, group, fromColor, toColor, onClick }) => <><div className="flex relative " onClick={onClick}>
	<div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

	<div className={`flex-1 bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 cursor-pointer border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black`}>
  {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "green-500"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>}
  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "green-500"} font-semibold leading-none`}>{group || ""}</div>
	<div href="#" className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</div></>

const ToolForm = ({ Icon, title, desc, to, group, fromColor, toColor, onClick, api }) => <><form action={to} method="POST" className="flex relative">
	<input type="hidden" name="token" value={api.defaults.headers.common['x-access-token']} />
	<button type="submit" className="flex-1 text-left">
	<div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

	<div type="submit" className={`flex-1 bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 cursor-pointer border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black`}>
  {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "green-500"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>}
  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "green-500"} font-semibold leading-none`}>{group || ""}</div>
	<div className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</button>
</form></>

const Tool = ({ Icon, title, desc, to, group, fromColor, toColor, onClick, api }) => <Link to={to} className="flex relative">
	<div  className="flex-1 text-left">
	<div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

	<div  className={`flex-1 bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 cursor-pointer border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black`}>
  {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "green-500"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>}
  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "green-500"} font-semibold leading-none`}>{group || ""}</div>
	<div className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</div>
</Link>

const ATool = ({ Icon, title, desc, to, group, fromColor, toColor, onClick, api }) => <a href={to} className="flex relative">
	<div  className="flex-1 text-left">
	<div className={`absolute inset-0 bg-gradient-to-r from-${fromColor ? fromColor : "green-400"} to-${toColor ? toColor : "blue-500"} shadow-lg transform skew-y-0 -rotate-3 rounded-3xl `}></div>

	<div  className={`flex-1 bg-white rounded-xl transition hover:shadow-md overflow-hidden md:max-w-1lg text-gray-500 cursor-pointer border-t-2 border- hover:border-${fromColor ? fromColor : "blue-400"} md:flex relative transform hover:scale-105  hover:text-black`}>
  {Icon && <div className={`md:flex-shrink-0 flex justify-start items-center ml-8 text-${fromColor ? fromColor : "green-500"}`}>
	<Icon className="h-16 w-16 mb-4 mt-4" />
  </div>}
  <div className="p-4">
	<div className={`uppercase tracking-wide text-sm text-${fromColor ? fromColor : "green-500"} font-semibold leading-none`}>{group || ""}</div>
	<div className="block text-lg xl:text-xl 2xl:text-2xl leading-tight font-medium text-black leading-none">{title}</div>
	<p className="mt-1 pr-1 text-sm ">{desc} </p>
  </div>
</div>
</div>
</a>

export default withRouter(Body)