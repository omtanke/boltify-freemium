```tsx
interface CommonOptions {
	/**
	 * Pause the timer when the mouse hover the toast.
	 * `Default: true`
	 */
	pauseOnHover?: boolean;
	/**
	 * Pause the toast when the window loses focus.
	 * `Default: true`
	 */
	pauseOnFocusLoss?: boolean;
	/**
	 * Remove the toast when clicked.
	 * `Default: false`
	 */
	closeOnClick?: boolean;
	/**
	 * Set the delay in ms to close the toast automatically.
	 * Use `false` to prevent the toast from closing.
	 * `Default: 5000`
	 */
	autoClose?: number | false;
	/**
	 * Set the default position to use.
	 * `One of: 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'`
	 * `Default: 'top-right'`
	 */
	position?: ToastPosition;
	/**
	 * Pass a custom close button.
	 * To remove the close button pass `false`
	 */
	closeButton?:
		| boolean
		| ((props: CloseButtonProps) => React__default.ReactNode)
		| React__default.ReactElement<CloseButtonProps>;
	/**
	 * An optional css class to set for the progress bar.
	 */
	progressClassName?: ToastClassName;
	/**
	 * Hide or show the progress bar.
	 * `Default: false`
	 */
	hideProgressBar?: boolean;
	/**
	 * Pass a custom transition see https://fkhadra.github.io/react-toastify/custom-animation/
	 */
	transition?: ToastTransition;
	/**
	 * Allow toast to be draggable
	 * `Default: 'touch'`
	 */
	draggable?: boolean | 'mouse' | 'touch';
	/**
	 * The percentage of the toast's width it takes for a drag to dismiss a toast
	 * `Default: 80`
	 */
	draggablePercent?: number;
	/**
	 * Specify in which direction should you swipe to dismiss the toast
	 * `Default: "x"`
	 */
	draggableDirection?: DraggableDirection;
	/**
	 * Define the ARIA role for the toast
	 * `Default: alert`
	 *  https://www.w3.org/WAI/PF/aria/roles
	 */
	role?: string;
	/**
	 * Set id to handle multiple container
	 */
	containerId?: Id;
	/**
	 * Fired when clicking inside toaster
	 */
	onClick?: (event: React__default.MouseEvent) => void;
	/**
	 * Support right to left display.
	 * `Default: false`
	 */
	rtl?: boolean;
	/**
	 * Used to display a custom icon. Set it to `false` to prevent
	 * the icons from being displayed
	 */
	icon?: ToastIcon;
	/**
	 * Theme to use.
	 * `One of: 'light', 'dark', 'colored'`
	 * `Default: 'light'`
	 */
	theme?: Theme;
	/**
	 * When set to `true` the built-in progress bar won't be rendered at all. Autoclose delay won't have any effect as well
	 * This is only used when you want to replace the progress bar with your own.
	 *
	 * See https://stackblitz.com/edit/react-toastify-custom-progress-bar?file=src%2FApp.tsx for an example.
	 */
	customProgressBar?: boolean;
}

interface ToastOptions<Data = unknown> extends CommonOptions {
	/**
	 * An optional css class to set.
	 */
	className?: ToastClassName;
	/**
	 * Called when toast is mounted.
	 */
	onOpen?: () => void;
	/**
	 * Called when toast is unmounted.
	 * The callback first argument is the closure reason.
	 * It is "true" when the notification is closed by a user action like clicking on the close button.
	 */
	onClose?: (reason?: boolean | string) => void;
	/**
	 * An optional inline style to apply.
	 */
	style?: React__default.CSSProperties;
	/**
	 * Set the toast type.
	 * `One of: 'info', 'success', 'warning', 'error', 'default'`
	 */
	type?: TypeOptions;
	/**
	 * Set a custom `toastId`
	 */
	toastId?: Id;
	/**
	 * Used during update
	 */
	updateId?: Id;
	/**
	 * Set the percentage for the controlled progress bar. `Value must be between 0 and 1.`
	 */
	progress?: number;
	/**
	 * Let you provide any data, useful when you are using your own component
	 */
	data?: Data;
	/**
	 * Let you specify the aria-label
	 */
	ariaLabel?: string;
	/**
	 * Add a delay in ms before the toast appear.
	 */
	delay?: number;
	isLoading?: boolean;
}
```
