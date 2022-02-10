
env-staging:
	npm run env-staging
env-production:
	npm run env-production

cp-iosStaging:
	appcenter codepush release-react -a 1156904244-qq.com/BaseRNDemo_I -d Staging
cp-iosProd:
	appcenter codepush release-react -a 1156904244-qq.com/BaseRNDemo_I -d Production

cp-androidStaging:
	appcenter codepush release-react -a 1156904244-qq.com/BaseRNDemo_A -d Staging
cp-androidProd:
	appcenter codepush release-react -a 1156904244-qq.com/BaseRNDemo_A -d Production

stagingIos: env-staging cp-iosStaging
prodIos: env-production cp-iosProd

stagingAndroid: env-staging cp-androidStaging
prodAndroid: env-production cp-androidProd

staging: stagingAndroid stagingIos
prod: prodAndroid prodIos
