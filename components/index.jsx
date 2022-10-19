// window.console.log = function ()  {}

const Root = ReactDOM.createRoot(document.getElementById('app'));
Root.render(
	<ContextServicesProvider>
		<App />
	</ContextServicesProvider>
	)