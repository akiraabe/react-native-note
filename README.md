

# change permission /dev/kvm
sudo chmod 777 /dev/kvm

# How to star emulator
C:\practice\react-native\note>emulator -avd Pixel_2_API_28 -dns-server 8.8.8.8

# How to start expo
yarn start
( or npm start )


# Expand max_user_watchec
max_user_watches
https://www.virment.com/how-to-fix-system-limit-for-number-of-file-watchers-reached/

inotifyが監視できるファイル数を一時的に増加させるには、以下のコマンドを実行します。以下では、524288に設定しています。

$ sudo sysctl fs.inotify.max_user_watches=524288

