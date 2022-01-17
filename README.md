Ссылка на приложение https://seokatrin.github.io/flowers-shop/

Магазин Flowers-shop

Для хранения данных использую Redux. В компонентах исполизую Hook useDispatch и UseSelector для взаимодействия со state.

При загрузки страницы загружаются товары. Использую api для взаимодейсвия с простым сервером mockapi.

При сортировке, отсортированные товары приходят с сервера, так же происходит и при выборе категории товара.

При клике на иконку корзины в карточке товара, товар добавляется в корзину. При этом, на общей иконке корзины появляется колличество выбранных товаровю

При клике на товар (на фото) происходит переход на другую страницу с доп информацией о товаре. Там можно поместить товар в корзину или вернуться на предыдущую страницу. Общее колличество товаров обновляется при добавлении к корзину.

При клике на общую иконку корзины переходим на страницу корзины. Если корзина пуста, будет просто картинка и сообщение, что корзина пуста. Если выбранные товары есть, то они отображаются, так же цена выбранного товара, общая сумма товара, общая сумма заказа. Можно добавлять или удалять товар. Из данной странице можно вернуться на предыдущую или оформить заказ. Опция оформить заказ не реализована. Появится диалоговое окно иб оформлении заказа и все товары обнуляться.

При нажатии на лупу открывается поиск товара, при нажатии на товар, тоже можно перейти на страницу с доп информацией.

Вместо BrouserRoutter использую HashRoter для того, чтобы можно было переходить на другие страницы здесь в GitHub

Написала пользовательский хук, чтобы закрывать окно сортировки и окно с выпадающим списков поиска, при клики на любое место, кроме этих окон.  








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
