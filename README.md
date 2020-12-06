# Adder front

This is the front application for the Environment UE.  
2020 - 2021

The back-end is located at https://github.com/kryffin/adder-back.git

## How to use

First, clone this repository :
```shell script
$ git clone https://github.com/kryffin/adder-front.git
```

Then you will need to install the required dependencies :

```shell script
$ cd adder-front
$ yarn install
```

You can now run the application :

```shell script
$ ng serve
```

The front application will run on http://localhost:4200/

To stop the application, simply use *Ctrl-C* or *Cmd-C*.

Once you're finished, you can delete the repository from your computer with the following command :

```shell script
$ cd ..
$ rm -rf adder-front
```

## Notes

I used floats with only two decimals to ease the pain of complex divisions.

There is no test for dividing by zero since the front-end disables the *Diviser* button when trying to divide by zero.
