	// Visual properties

	var preferences =
	{
		screenWidth: 10,
		screenHeight: 10,
		screenGridResolutionWidth: 1024,
		screenGridResolutionHeight: 1024,
		screenGridColor:  "#FFFFFF22",
		instructionBackgroundColor: "rgb(40,40,40)",
		currentInstructionBackgoundColor: "yellow",
		memoryBackgroundColor: "rgb(40,40,40)",
		currentStackBaseBackgroundColor: "rgb(62,67,145)",
		stackDataBackgroundColor: "rgb(34,32,81)",
		inputOutputWidth: 1024,
		inputOutputHeight: 64,
		themeColors: [ "rgb(255,127,204)", "rgb(80,200,80)", "rgb(127,127,255)", "rgb(200,200,80)" ],
		showOnRun: false,
		
	}

	// Configuration

	var configuration =
	{
		version: "2.18",
		staticMemorySize: 16,
		stackMemorySize: 16,
		screenWidth: 16,
		screenHeight: 16,
		screenDepth: 3,
		screenFrequency: 30,
		inputMemorySize: 8,
		outputMemorySize: 8,
		audioChannels: 2,
		timers: 3,
		programSize: 128,
		dynamicMemorySize: 16,
		processorFrequency: 1000000
		
	};

	// Constants

	var constants =
	{
		numAddressDigits: 5,
		instructionOpcodeSize: 1,
		instructionArgs: 3,
		instructionSubArgSize: 2,
		instructionSubArgs: 2,
		instructionArgSize: 2 * 2,
		instructionSize: 1 + 3 * 2 * 2,		
		registerCount: 6,
		keyboardKeyCodeCount: 256,
		keyboardIntroCode: 13,
		keyboardSpaceCode: 32,		
		keyboardBackspaceCode: 8,
		keyboardShortcutInsert: 45,
		keyboardShortcutDelete: 46,
		keyboardShortcutEnable: 36,		
		keyboardShortcutReset: 82,
		keyboardShortcutRun: 82,
		keyboardShortcutStep: 80,
		keyboardShortcutStop: 84,
		keyboardShortcutDebug: 68,
		keyboardShortcutLoad: 76,
		keyboardShortcutSave: 83,
		keyboardShortcutNew: 78,
		keyboardShortcutConfiguration: 67,
		keyboardShortcutHelp: 72,
		keyboardShortcutAbout: 65,
		inputOutputFontWidth: 512,
		inputOutputFontHeight: 512,
		inputOutputFontColumns: 16,
		inputOutputFontRows: 16,
		inputOutputFontMap: [      36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, // 0..15
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, // 16..31
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, // 32..47
							  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 36, 36, 36, 36, 36, // 48..63
							  36,  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, // 64..79
							  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 32, 32, 32, 32, 32, // 80..95
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, // 96..111
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, // 112..127
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36,
							  36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36 ],
		projectSaveSectionSeparator: "---\n",
		timerDisplayCellDigits: 9,
		instructionResultContinue: 0,
		instructionResultProgramEnd: 1,
		instructionResultInterrupt: 2,
		showOnRunProcessorFrequencyLimit: 100,		
		
	}
	
						  

	// Enums

	var states =
	{
		stateStopped: 0,
		stateRunning: 1,
		stateWait: 2		
	};
	
	var dialogId =
	{
		none: 0,
		help: 1,
		configuration: 2,
		about: 3
	};
	
	var helpId =
	{
		none: 0,
		manual: 1,
		reference: 2,
		asciiTable: 3,
		frequenciesTable: 4,
		shortcuts: 5
	}

	var opCodes =
	{
		none:					0,
		memMove: 				1,
		memMoveValueAddress:	2,
		memMoveAddress:			3,
		aluAdd:					4,
		aluSubstract:			5,
		aluMultiply:			6,
		aluDivide:				7,
		aluModulus:				8,
		aluGreater:				9,
		aluGreaterEqual:		10,
		aluLess:				11,
		aluLessEqual:			12,
		aluEqual:				13,
		aluNotEqual:			14,
		aluAnd:					15,
		aluOr:					16,
		aluNot:					17,
		procJump:				18,
		procJumpIfGreaterEqual: 19,
		procJumpIfLess:			20,
		procJumpIfLessEqual:	21,
		procJumpIfEqual:		22,
		procJumpIfNotEqual:		23,
		procJumpIfTrue:			24,
		procJumpIfFalse:		25,
		procJumpIfGreater:		26,
		procWait:				27,
		call:					28,
		ret:					29,
		keyboardIsKeyPressed:   30,
		memSetData:     		31,		
		stringCopy: 		    32,		
		stringLength:     		33,		
		inputReadString:        34,
		outputWriteString:      35,
		outputWriteLineEnd:     36,
		inputReadNumber:        37,
		outputWriteNumber:      38,
		inputReadCharacter:     39,
		outputWriteCharacter:   40,
		randGenerate:			41,
		screenClear:			42,
		screenSetClearColor:	43,
		screenSetClearColorR:	44,
		screenSetClearColorG:	45,
		screenSetClearColorB:	46,
		screenSetColorKey:		47,
		screenSetColorKeyR:		48,
		screenSetColorKeyG:		49,
		screenSetColorKeyB:		50,
		screenSetColorKeyEnabled: 51,
		screenSetFlipXEnabled:	52,
		screenSetFlipYEnabled:	53,
		screenGetPixel:			54,
		screenGetPixelR:		55,
		screenGetPixelG:		56,
		screenGetPixelB:		57,
		screenSetPixel:			58,
		screenSetPixelR:		59,
		screenSetPixelG:		60,
		screenSetPixelB:		61,
		screenSetPixelRGB:		62,
		screenDrawImage:        63,
		soundEmit:				64,
		soundStop:				65,
		stackPush:				66,
		stackPop:				67,
		stackGetLocal:			68,
		stackSetLocal:			69,
		stackGetParameter:		70,
		stackPushParameter:		71,
		allocateMemory:			72,
		releaseMemory:			73,
		getTimer:				74,
		resetTimer:				75,
		breakPoint:				76
		
	}
	
	var instructionInfo =
	[
			{
				opCodeNames : ["MUEVE", "MUE", "MOVE", "MOV"],
				opCode : opCodes.memMove,
				argCount : 2
			},
			{
				opCodeNames : [ "OBTENVALOR", "OBV", "GETVALUE", "GETV"],
				opCode : opCodes.memMoveValueAddress,
				argCount : 2
			},
			{
				opCodeNames : [ "OBTENDIRECCION","OBD","GETADDRESS","GETA"],
				opCode : opCodes.memMoveAddress,
				argCount : 2
			},
			{
				opCodeNames : [ "SUMA","SUM","ADD"],
				opCode : opCodes.aluAdd,
				argCount : 3
			},
			{
				opCodeNames : ["RESTA","RES","SUBSTRACT","SUB"],
				opCode : opCodes.aluSubstract,
				argCount : 3
			},
			{
				opCodeNames : [ "MULTIPLICA" ,"MUL","MULTIPLY"],
				opCode : opCodes.aluMultiply,
				argCount : 3
			},
			{
				opCodeNames : [ "DIVIDE" ,"DIV"],
				opCode : opCodes.aluDivide,
				argCount : 3
			},
			{
				opCodeNames : [ "MODULO" ,"MOD","MODULUS"],
				opCode : opCodes.aluModulus,
				argCount : 3
			},
			{
				opCodeNames : [ "MAYOR","MA","GREATER","GT"],
				opCode : opCodes.aluGreater,
				argCount : 3
			},
			{
				opCodeNames : [ "MAYORIGUAL","MAI","GREATEREQUAL","GTE"],
				opCode : opCodes.aluGreaterEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "MENOR", "ME","LESS","LE"],
				opCode : opCodes.aluLess,
				argCount : 3
			},
			{
				opCodeNames : [ "MENORIGUAL","MEI","LESSEQUAL","LEE"],
				opCode : opCodes.aluLessEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "IGUAL","IG", "EQUAL","EQ"],
				opCode : opCodes.aluEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "DIFERENTE","DIF","NOTEQUAL","NEQ"],
				opCode : opCodes.aluNotEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "AND"],
				opCode : opCodes.aluAnd,
				argCount : 3
			},
			{
				opCodeNames : [ "OR"],
				opCode : opCodes.aluOr,
				argCount : 3
			},
			{
				opCodeNames : [ "NOT"],
				opCode : opCodes.aluNot,
				argCount : 2
			},
			{
				opCodeNames : [ "SALTASIMAYOR","SMA","JUMPIFGREATER","JGT"],
				opCode : opCodes.procJumpIfGreater,
				argCount : 3
			},
			{
				opCodeNames : [ "SALTASIMAYORIGUAL","SMAI","JUMPIFGREATEREQUAL","JGTE"],
				opCode : opCodes.procJumpIfGreaterEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "SALTASIMENOR","SME","JUMPIFLESS","JLE"],
				opCode : opCodes.procJumpIfLess,
				argCount : 3
			},
			{
				opCodeNames : [ "SALTASIMENORIGUAL","SMEI","JUMPIFLESSEQUAL","JLEE"],
				opCode : opCodes.procJumpIfLessEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "SALTASIIGUAL","SIG","JUMPIFEQUAL","JEQ"],
				opCode : opCodes.procJumpIfEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "SALTASIDIFERENTE","SDIF","JUMPIFNOTEQUAL","JNE"],
				opCode : opCodes.procJumpIfNotEqual,
				argCount : 3
			},
			{
				opCodeNames : [ "SALTASICIERTO","SC" ,"JUMPIFTRUE","JT"],
				opCode : opCodes.procJumpIfTrue,
				argCount : 2
			},
			{
				opCodeNames : [ "SALTASIFALSO","SF","JUMPIFFALSE","JF"],
				opCode : opCodes.procJumpIfFalse,
				argCount : 2
			},
			{
				opCodeNames : [ "SALTA","S","JUMP","JMP"],
				opCode : opCodes.procJump,
				argCount : 1
			},
			{
				opCodeNames : [ "ESPERA","ESP","WAIT"],
				opCode : opCodes.procWait,
				argCount : 1
			},
			{
				opCodeNames : [ "LLAMA","LL","CALL"],
				opCode : opCodes.call,
				argCount : 2
			},
			{
				opCodeNames : [ "RETORNA","RET","RETURN"],
				opCode : opCodes.ret,
				argCount : 0
			},
			{
				opCodeNames : [ "_TECLA_PULSADA_"],
				opCode : opCodes.keyboardIsKeyPressed,
				argCount : 2
			},
			{
				opCodeNames : [ "_PON_DATOS_"],
				opCode : opCodes.memSetData,
				argCount : 2
			},
			{
				opCodeNames : [ "_COPIA_CADENA_"],
				opCode : opCodes.stringCopy,
				argCount : 2
			},			
			{
				opCodeNames : [ "_LONGITUD_CADENA_"],
				opCode : opCodes.stringLength,
				argCount : 2
			},			
			{
				opCodeNames : [ "_LEE_CADENA_"],
				opCode : opCodes.inputReadString,
				argCount : 1
			},
			{
				opCodeNames : [ "_ESCRIBE_CADENA_"],
				opCode : opCodes.outputWriteString,
				argCount : 1
			},
			{
				opCodeNames : [ "_ESCRIBE_FIN_LINEA_"],
				opCode : opCodes.outputWriteLineEnd,
				argCount : 0
			},
			{
				opCodeNames : [ "_LEE_NUMERO_"],
				opCode : opCodes.inputReadNumber,
				argCount : 1
			},
			{
				opCodeNames : [ "_ESCRIBE_NUMERO_"],
				opCode : opCodes.outputWriteNumber,
				argCount : 1
			},
			{
				opCodeNames : [ "_LEE_CARACTER_"],
				opCode : opCodes.inputReadCharacter,
				argCount : 1
			},			
			{
				opCodeNames : [ "_ESCRIBE_CARACTER_"],
				opCode : opCodes.outputWriteCharacter,
				argCount : 1
			},			
			{
				opCodeNames : [ "_NUMERO_ALEATORIO_"],
				opCode : opCodes.randGenerate,
				argCount : 3
			},
			{
				opCodeNames : [ "_LIMPIA_PANTALLA_"],
				opCode : opCodes.screenClear,
				argCount : 0
			},
			{
				opCodeNames : [ "_PON_COLOR_LIMPIAR_"],
				opCode : opCodes.screenSetClearColor,
				argCount : 1
			},
			{
				opCodeNames : [ "_PON_COLOR_LIMPIAR_R_"],
				opCode : opCodes.screenSetClearColorR,
				argCount : 1
			},
			{
				opCodeNames : [ "_PON_COLOR_LIMPIAR_G_"],
				opCode : opCodes.screenSetClearColorG,
				argCount : 1
			},
			{
				opCodeNames : [ "_PON_COLOR_LIMPIAR_B_"],
				opCode : opCodes.screenSetClearColorB,
				argCount : 1
			},
			{
				opCodeNames : [ "_OBTEN_PIXEL_"],
				opCode : opCodes.screenGetPixel,
				argCount : 3
			},
			{
				opCodeNames : [ "_OBTEN_PIXEL_R_"],
				opCode : opCodes.screenGetPixelR,
				argCount : 3
			},
			{
				opCodeNames : [ "_OBTEN_PIXEL_G_"],
				opCode : opCodes.screenGetPixelG,
				argCount : 3
			},
			{
				opCodeNames : [ "_OBTEN_PIXEL_B_"],
				opCode : opCodes.screenGetPixelB,
				argCount : 3
			},
			{
				opCodeNames : [ "_PON_PIXEL_"],
				opCode : opCodes.screenSetPixel,
				argCount : 3
			},
			{
				opCodeNames : [ "_PON_PIXEL_R_"],
				opCode : opCodes.screenSetPixelR,
				argCount : 3
			},
			{
				opCodeNames : [ "_PON_PIXEL_G_"],
				opCode : opCodes.screenSetPixelG,
				argCount : 3
			},
			{
				opCodeNames : [ "_PON_PIXEL_B_"],
				opCode : opCodes.screenSetPixelB,
				argCount : 3
			},
			{
				opCodeNames : [ "_PON_PIXEL_RGB_"],
				opCode : opCodes.screenSetPixelRGB,
				argCount : 3
			},
			{
				opCodeNames : [ "_DIBUJA_IMAGEN_"],
				opCode : opCodes.screenDrawImage,
				argCount : 3
			},
			{
				opCodeNames : [ "_PON_USAR_COLOR_CLAVE_"],
				opCode : opCodes.screenSetColorKeyEnabled,
				argCount : 1
			},			
			{
				opCodeNames : [ "_PON_COLOR_CLAVE_"],
				opCode : opCodes.screenSetColorKey,
				argCount : 1
			},			
			{
				opCodeNames : [ "_PON_COLOR_CLAVE_R_"],
				opCode : opCodes.screenSetColorKeyR,
				argCount : 1
			},			
			{
				opCodeNames : [ "_PON_COLOR_CLAVE_G_"],
				opCode : opCodes.screenSetColorKeyG,
				argCount : 1
			},			
			{
				opCodeNames : [ "_PON_COLOR_CLAVE_B_"],
				opCode : opCodes.screenSetColorKeyB,
				argCount : 1
			},		
			{
				opCodeNames : [ "_PON_INVERTIR_X_"],
				opCode : opCodes.screenSetFlipXEnabled,
				argCount : 1
			},			
			{
				opCodeNames : [ "_PON_INVERTIR_Y_"],
				opCode : opCodes.screenSetFlipYEnabled,
				argCount : 1
			},				
			{
				opCodeNames : [ "_EMITE_SONIDO_"],
				opCode : opCodes.soundEmit,
				argCount : 2
			},
			{
				opCodeNames : [ "_PARA_SONIDO_"],
				opCode : opCodes.soundStop,
				argCount : 1
			},
			{
				opCodeNames : [ "MONTA","MT","PUSH"],
				opCode : opCodes.stackPush,
				argCount : 0
			},
			{
				opCodeNames : [ "DESMONTA","DMT","POP"],
				opCode : opCodes.stackPop,
				argCount : 0
			},
			{
				opCodeNames : [ "_MONTA_LOCAL_"],
				opCode : opCodes.stackPush,
				argCount : 0
			},
			{
				opCodeNames : [ "_DESMONTA_LOCAL_"],
				opCode : opCodes.stackPop,
				argCount : 0
			},			
			{
				opCodeNames : [ "_OBTEN_LOCAL_", "_GET_LOCAL_"],
				opCode : opCodes.stackGetLocal,
				argCount : 2
			},
			{
				opCodeNames : [ "_PON_LOCAL_", "_SET_LOCAL_"],
				opCode : opCodes.stackSetLocal,
				argCount : 2				
			},
			{
				opCodeNames : [ "_MONTA_PARAMETRO_"],
				opCode : opCodes.stackPushParameter,
				argCount : 1
			},			
			{
				opCodeNames : [ "_OBTEN_PARAMETRO_", "_GET_PARAMETER_"],
				opCode : opCodes.stackGetParameter,
				argCount : 2
			},
			{
				opCodeNames : [ "_RESERVA_MEMORIA_","_MEMORY_ALLOCATE_"],
				opCode : opCodes.allocateMemory,
				argCount : 2
			},
			{
				opCodeNames : [ "_LIBERA_MEMORIA_","_FREE_MEMORY_" ],
				opCode : opCodes.releaseMemory,
				argCount : 1
			},
			{
				opCodeNames : [ "_OBTEN_TEMPORIZADOR_","_GET_TIMER_"],
				opCode : opCodes.getTimer,
				argCount : 2
			},
			{
				opCodeNames : [ "_REINICIA_TEMPORIZADOR_","_RESET_TIMER_" ],
				opCode : opCodes.resetTimer,
				argCount : 1
			},
			{
				opCodeNames : [ "INTERRUMPE","INT","INTERRUPT"],
				opCode : opCodes.breakPoint,
				argCount : 0
			}
		
	]
	
	

	var subArgType =
	{
		none: 0,
		inmediate: 1,
		register: 2,
		memoryPosition: 3
	}

	var registerId =
	{
		a:  0,
		b:  1,
		c:  2,
		pc: 3,
		sp: 4,
		bp: 5,
		r:  6
	}
	
	class MachineUtils
	{
		static RemoveEqualTo(array, value)
		{
			var i = 0;
			var result = [];
			for(var j = 0; j < array.length; j++)
			{
				if(array[j] != value)
				{
					result[i] = array[j];
					i ++;
				}
			}
			
			return result;
		}
		
		static Pad(number, length)
		{
			var s = number + "";
			
			var z = (length - s.length);
			for(var i = 0; i < z; i ++) { s = "0" + s; }
			
			return s;
		}
		
		static PadTextRight(text, length)
		{
			var s = text;
			
			var z = (length - s.length);
			for(var i = 0; i < z; i ++) { s += " "; }
			
			return s;
		}
		
		static PadTextLeft(text, length)
		{
			var s = text;
			
			var z = (length - s.length);
			for(var i = 0; i < z; i ++) { s = " " + s; }
			
			return s;
		}

		static IsDigit(character)
		{
			var result = character == '0' ||
						character == '1' ||
						character == '2' ||
						character == '3' ||
						character == '4' ||
						character == '5' ||
						character == '6' ||
						character == '7' ||
						character == '8' ||
						character == '9';
						
			return result;
						
		}

		static GetCookie(name)
		{
			return localStorage.getItem(name);
		}

		static SetCookie(name, value)
		{
			return localStorage.setItem(name, value);
		}
		
	}


		

	class Machine
	{
		constructor()
		{
			this.isStarted = false;
			this.resourcesLoaded = 0;
		}
		
		// Resources loading
		
		
		ResourcesLoad()
		{

			this.screenGridDigits = new Array(10);
			this.inputOutputFont;
			
			var machine = this;
			var im;

			var onLoadFunction = function()
			{
				machine.resourcesLoaded ++;
			}
			
			for(var i = 0; i < 10; i ++)
			{
				im = new Image();
				
				im.onload = onLoadFunction;

				im.src = "images/digit" + i + ".png";
				
				this.screenGridDigits[i] = im;
				
			}			
			
			im = new Image();
			im.onload = onLoadFunction;
			im.src = "images/output-font.png";
			
			this.inputOutputFont = im;

		}
		
		ResourcesAreLoaded()
		{
			return this.resourcesLoaded == 11;
		}
		
		// Themes
		
		ThemeStart()
		{
			this.themeScreen = document.getElementById("Pantalla");
			
			var index = MachineUtils.GetCookie("ThemeIndex");
			
			if(index == null)
			{
				this.ThemeDoApply(0);
				this.themeIndex = 0;
			}
			else
			{
				this.ThemeDoApply(index);
				this.themeIndex = index;
			}
			
			MachineUtils.SetCookie("ThemeIndex", this.themeIndex);
			
			
		}
		
		ThemeDoApply(index)
		{
			this.themeScreen.style.backgroundColor = preferences.themeColors[index];
			this.themeIndex = index;
			
			MachineUtils.SetCookie("ThemeIndex", this.themeIndex);
		}
		
		// Dialogs
		
		DialogStart()
		{
			this.currentDialog = dialogId.none;
			document.getElementById("dialogBase").style.display = "none";
		}
		
		DialogOpen(id)
		{
			document.getElementById("dialogBase").style.display = "block";
			document.body.style.overflow = "hidden";
			

			if(id == dialogId.help)
			{
				this.OnHelpDialogOpen();
			}
			else if(id == dialogId.configuration)
			{
				this.OnConfigurationDialogOpen();
			}
			else // id == dialogId.about
			{
				this.OnAboutDialogOpen();
			}
			
			
			this.currentDialog = id;
			
		}
		
		DialogClose()
		{
			
			if(this.currentDialog == dialogId.help)
			{
				this.OnHelpDialogClose();
			}
			else if(this.currentDialog == dialogId.configuration)
			{
				this.OnConfigurationDialogClose();
			}
			else // id == dialogId.about
			{
				this.OnAboutDialogClose();
			}
			
			document.getElementById("dialogBase").style.display = "none";
			document.body.style.overflow = "auto";
			
			this.currentDialog = dialogId.none;
		}

		// About
		
		AboutStart()
		{
			document.getElementById("aboutDialogBox").style.display = "none";			
		}
		
		OnAboutDialogOpen()
		{
			document.getElementById("aboutDialogBox").style.display = "block";	
			var contents = document.getElementById("aboutDialogContents");
			contents.innerHTML = texts.about;
			contents.scrollTop = 0;
			
		}
		
		OnAboutDialogClose()
		{
			document.getElementById("aboutDialogBox").style.display = "none";			
		}
		
	
		// Help
		
		HelpStart()
		{
			// this.helpReady = false;
			
			// var onTextReady =	function(text)
								// {
									// document.getElementById("help").innerHTML = text
									// machine.helpReady = true;
								// }
			
			// var onFetchReady = 	function(response)
								// {
									// if(response.status == 200)
									// {
										// response.text().then(onTextReady)
									// }
								// }
			
			// fetch('./texts/manual.txt').then(onFetchReady);
			var text = "+-------------------------------------------------------------+\n"
			text +=    "|                        Index                                |\n"
			text +=    "+-------------------------------------------------------------+\n"
			text += "\n"
			text += "\n"
			text += "<a name=\"referenceIndex\"" + opCodeName + "\"></a>";
			
			for(var i = 0; i < instructionInfo.length; i ++)
			{
				var opCodeName = instructionInfo[i].opCodeNames[0];
				text += "<a href=\"#reference" + opCodeName + "\">" + MachineUtils.PadTextRight(opCodeName, 24) + "</a>" + " ";
				if((i + 1) % 3 == 0) { text += "\n"; }
			}
			
			text += "\n"
			text += "\n"
			text += "----------------------------------------------------\n"
			
			for(var i = 0; i < instructionInfo.length; i ++)
			{
				var opCodeName = instructionInfo[i].opCodeNames[0];
				
				text += "<a name=\"reference" + opCodeName + "\"></a>";
				text += "\n";
				text += MachineUtils.PadTextRight(opCodeName, 24);
				for(var j = 0; j < instructionInfo[i].argCount; j++) { text += "arg" + (j + 1) + "   "; }
				text += "\n";
				text += "\n";
				text += texts.helpInstructions[i];
				text += "\n";
				text += "\n";
				if(instructionInfo[i].opCodeNames.length > 1)
				{
					text += "Sinónimos y abreviaturas: ";
					for(var j = 1; j < instructionInfo[i].opCodeNames.length; j ++) { text += instructionInfo[i].opCodeNames[j] + "   "; }
					text += "\n";
				}
				
				text += "\n";
				text += "<a href=\"#referenceIndex\">" + MachineUtils.PadTextLeft("&#8593; Index", 58) + "</a>";
				text += "\n";
				text += "----------------------------------------------------\n"

			}
	
			this.helpReference = text;
			
			document.getElementById("helpDialogBox").style.display = "none";
			
			this.helpCurrentId = helpId.none;
		}
		
		OnHelpDialogOpen()
		{
			document.getElementById("helpDialogBox").style.display = "block";
			
			this.helpCurrentId = helpId.manual;
			
			this.DoShowHelp();
			
			
		}
		
		OnHelpDialogClose()
		{
			document.getElementById("helpDialogBox").style.display = "none";
		}
		
		HelpShow(id)
		{

			this.helpCurrentId = id;
			
			this.DoShowHelp();
			
		}
		
		DoShowHelp()
		{
			var text;
			
			if(this.helpCurrentId == helpId.manual)
			{
				text = texts.helpManual;
			}
			else if(this.helpCurrentId == helpId.reference)
			{
				text = this.helpReference;
			}
			else if(this.helpCurrentId == helpId.asciiTable)
			{
				text = texts.asciiTable;
			}
			else if(this.helpCurrentId == helpId.frequenciesTable)
			{
				text = texts.frequenciesTable;
			}
			else // this.helpCurrentId == helpId.shortcuts)
			{
				text = texts.shortcuts;
			}
			
			var contents = document.getElementById("helpDialogContents");
			contents.innerHTML = text;
			contents.scrollTop = 0;			
		}
		
		
		
		
		// Preferences
		
		ShowOnRunStart()
		{
			this.showOnRunCell = document.getElementById("ShowOnRun");
	
		}
		
		ShowOnRunIsEnabled()
		{
			return preferences.showOnRun;
		}
		
		// Configuration
		
		ConfigurationStart()
		{
			this.configurationVersionCell 			= document.getElementById("Version");
			this.configurationStaticMemorySizeCell 	= document.getElementById("StaticMemorySize");
			this.configurationDynamicMemorySizeCell = document.getElementById("DynamicMemorySize");
			this.configurationStackMemorySizeCell 	= document.getElementById("StackMemorySize");			
			this.configurationInputMemorySizeCell 	= document.getElementById("InputMemorySize");
			this.configurationOutputMemorySizeCell 	= document.getElementById("OutputMemorySize");			
			this.configurationScreenMemorySizeCell 	= document.getElementById("ScreenMemorySize");
			this.configurationMemorySizeCell 		= document.getElementById("MemorySize");
			this.configurationScreenResolutionWidthCell 	= document.getElementById("ScreenResolutionWidth");
			this.configurationScreenResolutionHeightCell 	= document.getElementById("ScreenResolutionHeight");
			this.configurationScreenDepthCell 		= document.getElementById("ScreenDepth");
			this.configurationScreenFrequencyCell	= document.getElementById("ScreenFrequency");
			this.configurationNumAudioChannelsCell	= document.getElementById("NumAudioChannels");				
			this.configurationNumTimersCell			= document.getElementById("NumTimers");				
			this.configurationProgramSizeCell		= document.getElementById("ProgramSize");
			this.configurationProcessorFrequencyCell = document.getElementById("ProcessorFrequency");
			
			document.getElementById("configurationDialogBox").style.display = "none";	
					
		
		}
		
		
		ConfigurationShow()
		{
			// Show config
			
			this.configurationVersionCell.value 			= configuration.version;
			this.configurationStaticMemorySizeCell.value 	= configuration.staticMemorySize;
			this.configurationDynamicMemorySizeCell.value	= configuration.dynamicMemorySize;
			this.configurationStackMemorySizeCell.value 	= configuration.stackMemorySize;
			this.configurationInputMemorySizeCell.value 	= configuration.inputMemorySize;
			this.configurationOutputMemorySizeCell.value 	= configuration.outputMemorySize;
			this.configurationScreenMemorySizeCell.value 	= this.ScreenGetMemorySize();
			this.configurationMemorySizeCell.value 			= this.MemoryGetSize();
			this.configurationScreenResolutionWidthCell.value	= configuration.screenWidth;
			this.configurationScreenResolutionHeightCell.value	= configuration.screenHeight;
			this.configurationScreenDepthCell.value 		= configuration.screenDepth;
			this.configurationScreenFrequencyCell.value		= configuration.screenFrequency;
			this.configurationNumAudioChannelsCell.value	= configuration.audioChannels;
			this.configurationNumTimersCell.value			= configuration.timers;
			this.configurationProgramSizeCell.value			= configuration.programSize;
			this.configurationProcessorFrequencyCell.value	= configuration.processorFrequency;

		}
		
		ConfigurationSave()
		{
			var text = "configuration\n";
			text += "version:" + configuration.version + "\n";
			text += "processorFrequency:" + configuration.processorFrequency + "\n";
			text += "staticMemorySize:" + configuration.staticMemorySize + "\n";
			text += "dynamicMemorySize:" + configuration.dynamicMemorySize + "\n";
			text += "stackMemorySize:" + configuration.stackMemorySize + "\n";
			text += "inputMemorySize:" + configuration.inputMemorySize + "\n";
			text += "outputMemorySize:" + configuration.outputMemorySize + "\n";
			text += "programSize:" + configuration.programSize + "\n";
			text += "audioChannels:" + configuration.audioChannels + "\n";
			text += "timers:" + configuration.timers + "\n";		
			text += "screenWidth:" + configuration.screenWidth + "\n";
			text += "screenHeight:" + configuration.screenHeight + "\n";
			text += "screenDepth:" + configuration.screenDepth + "\n";
			text += "screenFrequency:" + configuration.screenFrequency + "\n";

			return text;
		}
		
		ConfigurationLoad(text)
		{
			var lines = text.split("\n");
			
			//configuration.version = lines[1].split(":")[1];
			configuration.processorFrequency	= parseInt(lines[2].split(":")[1]);
			configuration.staticMemorySize		= parseInt(lines[3].split(":")[1]);
			configuration.dynamicMemorySize		= parseInt(lines[4].split(":")[1]);
			configuration.stackMemorySize		= parseInt(lines[5].split(":")[1]);
			configuration.inputMemorySize		= parseInt(lines[6].split(":")[1]);
			configuration.outputMemorySize		= parseInt(lines[7].split(":")[1]);
			configuration.programSize			= parseInt(lines[8].split(":")[1]);
			configuration.audioChannels			= parseInt(lines[9].split(":")[1]);
			configuration.timers				= parseInt(lines[10].split(":")[1]);
			configuration.screenWidth			= parseInt(lines[11].split(":")[1]);
			configuration.screenHeight			= parseInt(lines[12].split(":")[1]);
			configuration.screenDepth			= parseInt(lines[13].split(":")[1]);
			configuration.screenFrequency		= parseInt(lines[14].split(":")[1]);
		}
		
		ConfigurationCheckNewConfiguration()
		{
			var newStaticMemorySize		= parseInt(this.configurationStaticMemorySizeCell.value);
			var newDynamicMemorySize	= parseInt(this.configurationDynamicMemorySizeCell.value);
			var newStackMemorySize		= parseInt(this.configurationStackMemorySizeCell.value);
			var newInputMemorySize		= parseInt(this.configurationInputMemorySizeCell.value);
			var newOutputMemorySize		= parseInt(this.configurationOutputMemorySizeCell.value);
			var newScreenResolutionWidth	= parseInt(this.configurationScreenResolutionWidthCell.value);
			var newScreenResolutionHeight	= parseInt(this.configurationScreenResolutionHeightCell.value);
			var newScreenDepth		= parseInt(this.configurationScreenDepthCell.value);
			var newScreenFrequency	= parseInt(this.configurationScreenFrequencyCell.value);
			var newNumAudioChannels	= parseInt(this.configurationNumAudioChannelsCell.value);
			var newNumTimers		= parseInt(this.configurationNumTimersCell.value);
			var newProgramSize		= parseInt(this.configurationProgramSizeCell.value);
			var newProcessorFrequency = parseInt(this.configurationProcessorFrequencyCell.value);
			
			
			var abort = false;
			
			if(newStaticMemorySize <= 0) { alert("El tamaño de memoria estática debe ser mayor que cero"); abort = true; }
			if(newDynamicMemorySize <= 0) { alert("El tamaño de memoria dinámica debe ser mayor que cero"); abort = true; }
			if(newDynamicMemorySize <= 0) { alert("El tamaño de memoria de pila debe ser mayor que cero"); abort = true; }
			if(newInputMemorySize <= 0) { alert("El tamaño de memoria de entrada debe ser mayor que cero"); abort = true; }
			if(newOutputMemorySize <= 0) { alert("El tamaño de memoria de salida debe ser mayor que cero"); abort = true; }
			if(newScreenResolutionWidth <= 0) { alert("El ancho de pantalla debe ser mayor que cero"); abort = true; }
			if(newScreenResolutionHeight <= 0) { alert("El ancho de pantalla debe ser mayor que cero"); abort = true; }
			if(newScreenDepth != 1 && newScreenDepth != 3) { alert("El número de canales de la pantalla sólo puede ser 1 para escala de grises o 3 para color rgb"); abort = true; }
			if(newScreenFrequency <= 0) { alert("La frecuencia de refresco de pantalla debe ser mayor que cero. Se recomienda un valor mínimo de 20 Herzios"); abort = true; }
			if(newNumAudioChannels <= 0) { alert("El número de canales de sonido debe ser mayor que cero"); abort = true; }
			if(newProgramSize <= 0) { alert("El tamaño de programa debe ser mayor que cero"); abort = true; }
			if(newProcessorFrequency <= 0) { alert("La frecuencia del procesador debe ser mayor que cero. Se recomienda un valor mínimo de 1000 Herzios"); abort = true; }
			if(newNumTimers <= 0) { alert("El número de temporizadores debe ser mayor que cero"); abort = true; }
			
			if(newStaticMemorySize < configuration.staticMemorySize && newStaticMemorySize > 0)
			{
				var notEmpty = false;
				
				for(var i = newStaticMemorySize; i < configuration.staticMemorySize; i ++)
				{
					if(this.memoryLabelsCells[i].value.trim().length > 0) { notEmpty = true; }
				}
				
				if(notEmpty)
				{
					alert("No puedes reducir la cantidad de memoria estática porque tienes al menos una etiqueta en las celdas de memoria comprendidas entre la dirección " + newStaticMemorySize + " y " + configuration.staticMemorySize + ". Borra las etiquetas para poder proceder con la operación");
					abort = true;
				}
				
				 
			}
			
			if(newProgramSize < configuration.programSize && newProgramSize > 0)
			{
				var notEmpty = false;
				
				for(var i = newProgramSize; i < configuration.programSize; i ++)
				{
					if(this.programLabelsCells[i].value.trim().length > 0) { notEmpty = true; }
					if(this.programCells[i].value.trim().length > 0) { notEmpty = true; }
					
				}
				
				if(notEmpty)
				{
					alert("No puedes reducir el tamaño del programa porque tienes contenidos en las celdas de programa comprendidas entre la dirección " + newProgramSize + " y " + configuration.programSize + ". Borra estos contenidos para poder proceder con la operación");
					abort = true;
				}
			}
			

			
			return !abort;
			
		}
		
		ConfigurationApplyNewConfiguration()
		{
			var newStaticMemorySize		= parseInt(this.configurationStaticMemorySizeCell.value);
			var newDynamicMemorySize	= parseInt(this.configurationDynamicMemorySizeCell.value);
			var newStackMemorySize		= parseInt(this.configurationStackMemorySizeCell.value);
			var newInputMemorySize		= parseInt(this.configurationInputMemorySizeCell.value);
			var newOutputMemorySize		= parseInt(this.configurationOutputMemorySizeCell.value);
			var newScreenResolutionWidth	= parseInt(this.configurationScreenResolutionWidthCell.value);
			var newScreenResolutionHeight	= parseInt(this.configurationScreenResolutionHeightCell.value);
			var newScreenDepth		= parseInt(this.configurationScreenDepthCell.value);
			var newScreenFrequency	= parseInt(this.configurationScreenFrequencyCell.value);
			var newNumAudioChannels	= parseInt(this.configurationNumAudioChannelsCell.value);
			var newProgramSize		= parseInt(this.configurationProgramSizeCell.value);
			var newProcessorFrequency = parseInt(this.configurationProcessorFrequencyCell.value);
			var newNumTimers		= parseInt(this.configurationNumTimersCell.value);
			
			
			configuration.processorFrequency = newProcessorFrequency;
			configuration.staticMemorySize	= newStaticMemorySize;
			configuration.dynamicMemorySize	= newDynamicMemorySize;
			configuration.stackMemorySize	= newStackMemorySize;
			configuration.inputMemorySize	= newInputMemorySize;
			configuration.outputMemorySize	= newOutputMemorySize;
			configuration.programSize	= newProgramSize;
			configuration.audioChannels	= newNumAudioChannels;
			configuration.screenWidth	= newScreenResolutionWidth;
			configuration.screenHeight	= newScreenResolutionHeight;
			configuration.screenDepth	= newScreenDepth;
			configuration.screenFrequency	= newScreenFrequency;
			configuration.timers	= newNumTimers;
				
		}
		
		OnConfigurationDialogOpen()
		{
			document.getElementById("configurationDialogBox").style.display = "block";

			this.configurationVersionCell.value 			= configuration.version;
			this.configurationStaticMemorySizeCell.value 	= configuration.staticMemorySize;
			this.configurationDynamicMemorySizeCell.value	= configuration.dynamicMemorySize;
			this.configurationStackMemorySizeCell.value 	= configuration.stackMemorySize;
			this.configurationInputMemorySizeCell.value 	= configuration.inputMemorySize;
			this.configurationOutputMemorySizeCell.value 	= configuration.outputMemorySize;
			this.configurationScreenMemorySizeCell.value 	= this.ScreenGetMemorySize();
			this.configurationMemorySizeCell.value 			= this.MemoryGetSize();
			this.configurationScreenResolutionWidthCell.value	= configuration.screenWidth;
			this.configurationScreenResolutionHeightCell.value	= configuration.screenHeight;
			this.configurationScreenDepthCell.value 		= configuration.screenDepth;
			this.configurationScreenFrequencyCell.value		= configuration.screenFrequency;
			this.configurationNumAudioChannelsCell.value	= configuration.audioChannels;
			this.configurationNumTimersCell.value			= configuration.timers;
			this.configurationProgramSizeCell.value			= configuration.programSize;
			this.configurationProcessorFrequencyCell.value	= configuration.processorFrequency;
			
			
		}
		
		OnConfigurationDialogClose()
		{
			document.getElementById("configurationDialogBox").style.display = "none";
		}
		
		
		
		CommentStart()
		{
			this.commentArea = document.getElementById("comment");
			
			this.commentArea.value = texts.commentDefault;
			
		}
		
		CommentSave()
		{
			var text = "comment\n";
			text += this.commentArea.value;
			return text;
		}
		
		CommentLoad(text)
		{
			var lines = text.split("\n");
			
			var comment = "";
			
			for(var i = 1; i < lines.length; i ++) { comment += lines[i] + "\n"; }
			
			this.commentArea.value = comment;
		}

		// Data
		
		DataStart()
		{
			this.data = new Array();
		}
		
		DataCompile(text)
		{
			var parts = text.split(",")
			var row = new Array(parts.length);
			
			for(var i = 0; i < parts.length; i ++) { row[i] = parseInt(parts[i].trim()); }
			
			this.data.push(row);
			
			return this.data.length - 1;

		}	

		DataClear()
		{
			this.data = new Array();
		}

		
		// Memory
		
		MemoryStart()
		{
			var row = document.getElementById("M" + MachineUtils.Pad(0, constants.numAddressDigits)).parentElement.parentElement;
			
			var screenMemorySize = this.ScreenGetMemorySize();
			var memorySize = this.MemoryGetSize();
			
			
			for(var i = 0; i < memorySize - 1; i ++)
			{
				var duplicatedRow = row.cloneNode(true);
				duplicatedRow.children[0].children[0].id = "ML" + MachineUtils.Pad(i + 1, constants.numAddressDigits);
				duplicatedRow.children[1].innerHTML = (i + 1);
				duplicatedRow.children[2].children[0].id = "M" + MachineUtils.Pad(i + 1, constants.numAddressDigits);
				duplicatedRow.children[2].children[0]				
				row.parentElement.appendChild(duplicatedRow);
				
			}
			
			// Cache memory cells

			this.memoryCells = new Array(memorySize);
			this.memoryLabelsCells = new Array(memorySize);

			for(var i = 0; i < memorySize; i ++)
			{
				this.memoryCells[i] = document.getElementById("M" + MachineUtils.Pad(i, constants.numAddressDigits));
				this.memoryLabelsCells[i] = document.getElementById("ML" + MachineUtils.Pad(i, constants.numAddressDigits));
				
			}

			this.memory = new Array(memorySize);
			for(var i = 0; i < memorySize; i++) { this.memory[i] = 0; }	

			// Layout memory
			
			
			this.staticMemoryAddress = 0;
			this.stackMemoryAddress  = memorySize - configuration.dynamicMemorySize - screenMemorySize - this.TimerGetMemorySize() - configuration.outputMemorySize - configuration.inputMemorySize - configuration.stackMemorySize;
			this.inputMemoryAddress  = memorySize - configuration.dynamicMemorySize - screenMemorySize - this.TimerGetMemorySize() - configuration.outputMemorySize - configuration.inputMemorySize;			
			this.outputMemoryAddress = memorySize - configuration.dynamicMemorySize - screenMemorySize - this.TimerGetMemorySize() - configuration.outputMemorySize;
			this.timerMemoryAddress	 = memorySize - configuration.dynamicMemorySize - screenMemorySize - this.TimerGetMemorySize();
			this.screenMemoryAddress = memorySize - configuration.dynamicMemorySize - screenMemorySize;
			this.dynamicMemoryAddress = memorySize - configuration.dynamicMemorySize;
			
			// Protect areas from being editables

			for(var i = this.staticMemoryAddress; i < configuration.staticMemorySize; i ++)
			{
				var c = this.memoryCells[i];
				c.readOnly = true;
				c.className = c.className + " notEditable";
				
			}

			
			for(var i = configuration.staticMemorySize; i < memorySize; i ++)
			{
				var c = this.memoryCells[i];
				c.readOnly = true;
				c.className = c.className + " notEditable";
				c = this.memoryLabelsCells[i];
				c.readOnly = true;
				c.className = c.className + " notEditable";				
			}
			
			// Set layout labels

			var c = this.memoryLabelsCells[this.screenMemoryAddress];
			c.value = "pantalla";
			c = this.memoryLabelsCells[this.stackMemoryAddress]
			c.value = "pila";
			c = this.memoryLabelsCells[this.inputMemoryAddress];
			c.value = "entrada";
			c = this.memoryLabelsCells[this.outputMemoryAddress];
			c.value = "salida";
			c = this.memoryLabelsCells[this.dynamicMemoryAddress];
			c.value = "dinamica";
			c = this.memoryLabelsCells[this.timerMemoryAddress];
			c.value = "temporizadores";

			


			
			
			
		}
		
		MemoryPrepareRestart()
		{
			var memorySize = this.MemoryGetSize();
			
			var firstCell = document.getElementById("M" + MachineUtils.Pad(0, constants.numAddressDigits));
			var firstLabelCell = document.getElementById("ML" + MachineUtils.Pad(0, constants.numAddressDigits));
			
			
			firstCell.value = "";
			firstCell.style.backgroundColor = preferences.memoryBackgroundColor;

			firstLabelCell.value = "";
			firstLabelCell.style.backgroundColor = preferences.memoryBackgroundColor;
			
			for(var i = 1; i < memorySize; i ++)
			{
				var row = document.getElementById("M" + MachineUtils.Pad(i, constants.numAddressDigits)).parentElement.parentElement;				
				row.parentElement.removeChild(row);
				
			}		
		}
		
		MemoryShow()
		{
			var memorySize = this.MemoryGetSize();
			
			for(var i = 0; i < memorySize; i ++)
			{
				this.memoryCells[i].value = this.memory[i];
			}
		}
		
		MemorySave()
		{
			var text = "memory\n";
			
			var memorySize = this.MemoryGetSize();
			
			for(var i = 0; i < memorySize; i ++)
			{
				var cell1 = this.memoryLabelsCells[i];
				var cell2 = this.memoryCells[i];
				text += cell1.value + ":" + i + ":" + cell2.value + "\n";
				
			}
			
			return text;
			
		}
		
		MemoryLoad(text)
		{			
			var lines = text.split("\n");

			var startLine = 1;
			
			var memorySize = this.MemoryGetSize();
			
			for(var i = 0; i < Math.min(memorySize, lines.length - 1); i ++)
			{
				var parts = lines[startLine + i].split(":");
			
				var cell1 = this.memoryLabelsCells[i];
				var cell2 = this.memoryCells[i];
				cell1.value = parts[0];
				cell2.value = parts[2];
			}
			
			if(lines.length - 2 > memorySize)
			{
				window.alert("Lineas " + lines.length);
				window.alert("Es posible que algunos contenidos de memoria  no se hayan podido cargar porque el tamaño de memoria es demasiado pequeño");
			}
			
		}
		
		ProgramLoad(text)
		{			
			var lines = text.split("\n");

			var startLine = 1;
						
			for(var i = 0; i < Math.min(configuration.programSize, lines.length - 1); i ++)
			{
				var parts = lines[startLine + i].split(":");
			
				var cell1 = this.programLabelsCells[i];
				var cell2 = this.programCells[i];
				cell1.value = parts[0];
				cell2.value = parts[2];
			}
			
			if(lines.length - 2 > configuration.programSize)
			{
				window.alert("Lineas " + lines.length);
				window.alert("Es posible que algunas instrucciones de programa no se hayan podido cargar porque el tamaño de la memoria de programa es demasiado pequeño");
			}
			
		}
			
		ScreenGetControlMemorySize()
		{
			return 2 * configuration.screenDepth + 3;			
		}
		
		
		ScreenGetMemorySize()
		{
			return this.ScreenGetControlMemorySize() + configuration.screenDepth * configuration.screenWidth * configuration.screenHeight;
		}
		
		
		ScreenGetPixelsStartAddress()
		{
			return this.screenMemoryAddress + this.ScreenGetControlMemorySize();
		}
		
		MemoryGetSize()
		{
			var total = configuration.staticMemorySize +
						configuration.stackMemorySize +
						configuration.inputMemorySize +
						configuration.outputMemorySize +
						this.ScreenGetMemorySize() +
						configuration.dynamicMemorySize +
						this.TimerGetMemorySize();
			
			return total;
		}
		
		
		// Registers
	
		RegistersStart()
		{
			this.registers = new Array(constants.registerCount);
			
			this.registers[registerId.a] = 0;
			this.registers[registerId.b] = 0;
			this.registers[registerId.c] = 0;
			this.registers[registerId.pc] = 0;
			this.registers[registerId.sp] = this.stackMemoryAddress + configuration.stackMemorySize;
			this.registers[registerId.bp] = this.stackMemoryAddress + configuration.stackMemorySize;
			this.registers[registerId.r] = 0;
			
			

			this.registersCells = new Array(constants.registerCount);
			
			this.registersCells[registerId.a] = document.getElementById("RA");
			this.registersCells[registerId.b] = document.getElementById("RB");
			this.registersCells[registerId.c] = document.getElementById("RC");
			this.registersCells[registerId.pc] = document.getElementById("PC");
			this.registersCells[registerId.sp] = document.getElementById("SP");
			this.registersCells[registerId.bp] = document.getElementById("BP");
			this.registersCells[registerId.r] = document.getElementById("RR");
			
			
		}
		
		RegistersShow()
		{
			// Show registers
			
			this.registersCells[registerId.a].value = this.registers[registerId.a];
			this.registersCells[registerId.b].value = this.registers[registerId.b];
			this.registersCells[registerId.c].value = this.registers[registerId.c];
			this.registersCells[registerId.pc].value = this.registers[registerId.pc];
			this.registersCells[registerId.sp].value = this.registers[registerId.sp];
			this.registersCells[registerId.bp].value = this.registers[registerId.bp];
			this.registersCells[registerId.r].value = this.registers[registerId.r];
			
		}
		
		RegistersSave()
		{
			var text = "registers\n";
			
			text += "A:" + this.registers[registerId.a] + "\n";
			text += "B:" + this.registers[registerId.b] + "\n";
			text += "C:" + this.registers[registerId.c] + "\n";
			text += "PC:" + this.registers[registerId.pc] + "\n";
			text += "SP:" + this.registers[registerId.sp] + "\n";
			text += "BP:" + this.registers[registerId.bp] + "\n";
			text += "R:" + this.registers[registerId.r] + "\n";
			
			return text;
		}
		
		RegistersLoad(text)
		{
			var lines = text.split("\n");

			this.registersCells[registerId.a].value 	= parseInt(lines[1].split(":")[1]);
			this.registersCells[registerId.b].value 	= parseInt(lines[2].split(":")[1]);
			this.registersCells[registerId.c].value 	= parseInt(lines[3].split(":")[1]);
			this.registersCells[registerId.pc].value	= parseInt(lines[4].split(":")[1]);
			this.registersCells[registerId.sp].value	= parseInt(lines[5].split(":")[1]);
			this.registersCells[registerId.bp].value	= parseInt(lines[6].split(":")[1]);
			this.registersCells[registerId.r].value 	= parseInt(lines[7].split(":")[1]);

			
			return text;
		}
		
		// Program
		
		ProgramStart()
		{
			var row = document.getElementById("P" + MachineUtils.Pad(0, constants.numAddressDigits)).parentElement.parentElement;
			
			for(var i = 0; i < configuration.programSize - 1; i ++)
			{
				var duplicatedRow = row.cloneNode(true);
				duplicatedRow.children[0].children[0].id = "PL" + MachineUtils.Pad(i + 1, constants.numAddressDigits);
				duplicatedRow.children[1].innerHTML = (i + 1);			
				duplicatedRow.children[2].children[0].id = "P" + MachineUtils.Pad(i + 1, constants.numAddressDigits);
				row.parentElement.appendChild(duplicatedRow);
			}
			
			// Cache program cells
			
			this.programCells = new Array(configuration.programSize);
			this.programLabelsCells = new Array(configuration.programSize);

			for(var i = 0; i < configuration.programSize; i ++)
			{
				this.programCells[i] = document.getElementById("P" + MachineUtils.Pad(i, constants.numAddressDigits));
				this.programLabelsCells[i] = document.getElementById("PL" + MachineUtils.Pad(i, constants.numAddressDigits));
				
			}

			
			this.program = new Array(configuration.programSize * constants.instructionSize);
			for(var i = 0; i < configuration.programSize * constants.instructionSize; i++) { this.program[i] = 0; }			
			
		}
		
		ProgramPrepareRestart()
		{
			var firstCell = document.getElementById("P" + MachineUtils.Pad(0, constants.numAddressDigits));
			var firstLabelCell = document.getElementById("PL" + MachineUtils.Pad(0, constants.numAddressDigits));
			
			firstCell.value = "";
			firstCell.style.backgroundColor = preferences.instructionBackgroundColor;
			firstLabelCell.value = "";
			firstLabelCell.style.backgroundColor = preferences.instructionBackgroundColor;

			for(var i = 1; i < configuration.programSize; i ++)
			{
				var row = document.getElementById("P" + MachineUtils.Pad(i, constants.numAddressDigits)).parentElement.parentElement;				
				row.parentElement.removeChild(row);
				
			}		
		}
		
		ProgramSave()
		{
			var text = "program\n";
			
			for(var i = 0; i < configuration.programSize; i ++)
			{
				var cell1 = this.programLabelsCells[i];
				var cell2 = this.programCells[i];
				text += cell1.value + ":" + i + ":" + cell2.value + "\n";
				
			}

			return text;			
		}
		
		ProgramUpdateLabels()
		{

			this.memoryLabels = {};

			var memorySize = this.MemoryGetSize();
			
			for(var i = 0; i < memorySize; i ++)
			{
				var cell = this.memoryLabelsCells[i];
				var value = cell.value.trim().toUpperCase();
				if(value.length > 0)
				{
					this.memoryLabels[value] = i;
				}
			}
			
			this.programLabels = {};
			
			for(var i = 0; i < configuration.programSize; i ++)
			{
				var cell = this.programLabelsCells[i];
				var value = cell.value.trim().toUpperCase();
				if(value.length > 0)
				{
					this.programLabels[value] = i;
				}
			}		
		}
		
		ProgramCompile(index)
		{
			// Compile program
			
			var success = true;

			// Compile the full program
			
			for(var i = 0; i < configuration.programSize * constants.instructionSize; i ++)
			{
				this.program[i] = 0;
			}
			
			for(var i = 0; i < configuration.programSize; i ++)
			{
				var lineSuccess;
				
				lineSuccess = this.ProgramCompileInstruction(i);
				
				success = success && lineSuccess;
			}
			
			return success;
		}
		
		ProgramCompileInstruction(instructionIndex)
		{
			var line = this.programCells[instructionIndex].value;
			
			var success = true;
			
			var opCode = opCodes.none;
			var argCount = 0;
			
			if(line.trim().length > 0)
			{
				var parts = MachineUtils.RemoveEqualTo(line.toUpperCase().trim().split(" "), "");
				
				var opCodeName = parts[0];
				
				var foundInfo = false;
				var infoIndex = 0;
				var i = 0;
				while(i < instructionInfo.length && !foundInfo)
				{
					var j = 0;
					while(j < instructionInfo[i].opCodeNames.length && !foundInfo)
					{
						if(opCodeName == instructionInfo[i].opCodeNames[j])
						{
							foundInfo = true;
							infoIndex = i;
						}
						else
						{
							j ++
						}
						
					}
					
					if(!foundInfo)
					{
						i ++;
					}
				}
				
				if(foundInfo)
				{
					opCode = instructionInfo[i].opCode;
					argCount = instructionInfo[i].argCount;
				}
				else
				{
					alert("Error en línea de programa " + instructionIndex + ": Código de operación " + opCodeName + " no reconocido ");
					
					success = false;
					
				}
				
			
				if(parts.length - 1 < argCount)
				{
					alert("Error en línea de programa " + instructionIndex + ": La operación " + opCodeName + " requiere más argumentos ");
					
					success = false;
				}
				else
				{
					
					for(var i = 0; i < argCount && success; i ++)
					{
						var argSuccess;

						argSuccess = this.ProgramDoCompileArgument(instructionIndex, i, parts[i + 1]);
						
						success = success && argSuccess;
					}
					
					
					
				}
				
			}
			
			this.program[constants.instructionSize * instructionIndex] = opCode;
			
			return success;
			
		}
		
		ProgramDoCompileArgument(instructionIndex, argIndex, linePart)
		{
			var success = true;
			
			if(linePart.charAt(0) == '{' && linePart.charAt(linePart.length - 1) == '}')
			{
				// Is data
				
				var index = this.DataCompile(linePart.substring(1, linePart.length - 1));

				var subArgOffset = this.ProgramDoCalculateProgramSubArgOffset(instructionIndex, argIndex, 0);
				this.program[subArgOffset + 0] = subArgType.inmediate;
				this.program[subArgOffset + 1] = index;
				
			}
			else if(linePart.includes("["))
			{
				// Has offset
				
				var lineSubParts = linePart.split("[");
				
				var subPart1 = lineSubParts[0];
				var subPart2 = lineSubParts[1].slice(0, lineSubParts[1].length - 1);
				
				if(subPart1.trim().length > 0)
				{
					// Base is explicit
					
					var subArgSuccess;
					
					subArgSuccess = this.ProgramDoCompileSubArgument(instructionIndex, argIndex, 0, subPart1);
					
					success = success && subArgSuccess;
				}
				else
				{
					// Base is implicit 
					
					var subArgOffset = this.ProgramDoCalculateProgramSubArgOffset(instructionIndex, argIndex, 0);
					this.program[subArgOffset + 0] = subArgType.inmediate;
					this.program[subArgOffset + 1] = 0;
					
				}
				
				var subArgSuccess;

				subArgSuccess = this.ProgramDoCompileSubArgument(instructionIndex, argIndex, 1, subPart2);
				
				success = success && subArgSuccess;
				
			
			}
			else
			{
				// Has a single subargument
				
				var subArgSuccess;
				subArgSuccess = this.ProgramDoCompileSubArgument(instructionIndex, argIndex, 0, linePart);
				
				success = success && subArgSuccess;
				
				if(success)
				{
					var subArgOffset = this.ProgramDoCalculateProgramSubArgOffset(instructionIndex, argIndex, 1);
					this.program[subArgOffset + 0] = subArgType.none;
					this.program[subArgOffset + 1] = 0;
					
				}
				
			}
			

			return success;

		}
		
		ProgramDoCalculateProgramSubArgOffset(instructionIndex, argIndex, subArgIndex)
		{
			var address = instructionIndex * constants.instructionSize + constants.instructionOpcodeSize + argIndex * constants.instructionArgSize + subArgIndex * constants.instructionSubArgSize;
			return address;
		}
		
		ProgramDoCompileSubArgument(instructionIndex, argIndex, subArgIndex, lineSubPart)
		{
			var initial = lineSubPart[0];
			var hasSecondInitial = (lineSubPart.length > 1);			
			var secondInitial = (hasSecondInitial ? lineSubPart[1] : ' ');
			var subArgOffset = this.ProgramDoCalculateProgramSubArgOffset(instructionIndex, argIndex, subArgIndex);
			var success = true;
			
			
			if(initial == '0' && hasSecondInitial && secondInitial == 'X')
			{
				this.program[subArgOffset + 0] = subArgType.inmediate;
				this.program[subArgOffset + 1] = parseInt(lineSubPart, 16);
			}
			else if(initial == '-' || MachineUtils.IsDigit(initial))
			{
				this.program[subArgOffset + 0] = subArgType.inmediate;
				this.program[subArgOffset + 1] = parseInt(lineSubPart, 10);				
			}
			else if(initial == '@')
			{
				this.program[subArgOffset + 0] = subArgType.memoryPosition;
				
				var address = lineSubPart.substring(1, lineSubPart.length);
				
				this.program[subArgOffset + 1] = parseInt(address, 10);				
			}
			else if((lineSubPart in this.memoryLabels))
			{
				this.program[subArgOffset + 0] = subArgType.memoryPosition;
				this.program[subArgOffset + 1] = this.memoryLabels[lineSubPart];
				
			}
			else if((lineSubPart in this.programLabels))
			{
				this.program[subArgOffset + 0] = subArgType.inmediate;
				this.program[subArgOffset + 1] = this.programLabels[lineSubPart];
				
			}
			else if(lineSubPart == "A" || lineSubPart == "B" || lineSubPart == "C" || lineSubPart == "PC" || lineSubPart == "SP" || lineSubPart == "BP" || lineSubPart == "R")
			{
				var rId = registerId.none;
				
				if(lineSubPart == "A") { rId = registerId.a; }
				else if(lineSubPart == "B") { rId = registerId.b; }
				else if(lineSubPart == "C") { rId = registerId.c; }
				else if(lineSubPart == "PC") { rId = registerId.pc; }
				else if(lineSubPart == "SP") { rId = registerId.sp; }
				else if (lineSubPart == "BP") { rId = registerId.bp; }
				else // lineSubPart == "R"
				{ rId = registerId.r; }
				
				
				this.program[subArgOffset + 0] = subArgType.register;
				this.program[subArgOffset + 1] = rId;

			}
			else
			{
				alert("Error en línea de programa " + instructionIndex + " argumento " + argIndex + ": Argumento " + lineSubPart + " no reconocido");
				
				success = false;
			}
			
			return success;
			
		}
		
		ProgramReadArg(instructionIndex, argIndex)
		{
			var subArg0Value = this.ProgramReadSubArg(instructionIndex, argIndex, 0);

			var subArg1Type = this.ProgramGetSubArgType(instructionIndex, argIndex, 1);
			
			if(subArg1Type == subArgType.none)
			{
				return subArg0Value;
			}
			else
			{
				// Arg is interpreted as a base address + offset
				
				var subArg1Value = this.ProgramReadSubArg(instructionIndex, argIndex, 1);
				
				return this.memory[subArg0Value + subArg1Value]
			}
			
			
		}
		
		ProgramReadArgAddress(instructionIndex, argIndex)
		{
			var subArg1Type = this.ProgramGetSubArgType(instructionIndex, argIndex, 1);
			var address = 0;
			
			if(subArg1Type == subArgType.none)
			{
				var subArg0Data = this.ProgramGetSubArgData (instructionIndex, argIndex, 0);			

				// SubArgType is a memory position
				
				return subArg0Data;
			}
			else
			{
				// Arg is a memory position expressed as base + offset
				var base = this.ProgramReadSubArg(instructionIndex, argIndex, 0);
				var offset = this.ProgramReadSubArg(instructionIndex, argIndex, 1);
				
				return base + offset;

			}
			
		}
		

		ProgramGetSubArgType(instructionIndex, argIndex, subArgIndex)
		{
			var base = instructionIndex * constants.instructionSize + constants.instructionOpcodeSize + argIndex * constants.instructionArgSize + subArgIndex * constants.instructionSubArgSize;
			
			return this.program[base + 0];
		}
		
		ProgramGetSubArgData(instructionIndex, argIndex, subArgIndex)
		{
			var base = instructionIndex * constants.instructionSize + constants.instructionOpcodeSize + argIndex * constants.instructionArgSize + subArgIndex * constants.instructionSubArgSize;
			
			return this.program[base + 1];
		}		
					
		
		ProgramReadSubArg(instructionIndex, argIndex, subArgIndex)
		{
			var base = instructionIndex * constants.instructionSize + constants.instructionOpcodeSize + argIndex * constants.instructionArgSize + subArgIndex * constants.instructionSubArgSize;
			var type = this.program[base + 0];
			var data = this.program[base + 1];
			
			if(type == subArgType.none)
			{
				return 0;
			}
			else if(type == subArgType.inmediate)
			{
				return data;
			}
			else if(type == subArgType.register)
			{
				return this.registers[data];
			}			
			else // type == subArgType.memoryPosition
			{
				return this.memory[data];
			}
		}
		
		ProgramWriteArg(instructionIndex, argIndex, value)
		{
			
			var subArg1Type = this.ProgramGetSubArgType(instructionIndex, argIndex, 1);
			
			if(subArg1Type == subArgType.none)
			{
				var subArg0Type = this.ProgramGetSubArgType(instructionIndex, argIndex, 0);
				var subArg0Data = this.ProgramGetSubArgData (instructionIndex, argIndex, 0);			

				if(subArg0Type == subArgType.register)
				{
					this.registers[subArg0Data] = value;
				}
				else if(subArg0Type == subArgType.memoryPosition)
				{
					this.memory[subArg0Data] = value;
				}
			}
			else
			{
				// Destination is a memory position expressed as base + offset
				
				var baseValue =  this.ProgramReadSubArg(instructionIndex, argIndex, 0);
				var offsetValue = this.ProgramReadSubArg(instructionIndex, argIndex, 1);
				
				this.memory[baseValue + offsetValue] = value;
			}
			
		}		
		
		
		ProgramInsertStringData()
		{
			var text = prompt("Escribe la cadena de texto que quieres convertir en datos", "");
			
			if(text != null)
			{
				var contents = this.programCells[this.focusedProgramLine].value;
				
				contents += "{";
				
				for(var i = 0; i < text.length; i ++)
				{
					contents += text.charCodeAt(i) + (i < text.length - 1 ? "," : "");
				}
				
				contents += ",0";
				
				contents += "}";
				
				this.programCells[this.focusedProgramLine].value = contents;
				
				alert("Longitud de los datos insertados: " + text.length + " celdas");
				
			}

		}

		ProgramInsertImageData()
		{
			
			var DoLoad3 = (image) =>
			{
				var width = image.width;
				var height = image.height;
				var canvas = document.createElement("canvas");
				//var canvas = document.getElementById("screen");
				canvas.width  = width;
				canvas.height = height;
				
				document.body.appendChild(canvas);
				
				var context = canvas.getContext("2d");
				context.drawImage(image, 0, 0);
				var data = context.getImageData(0, 0, width, height).data;
				
				var text = this.programCells[this.focusedProgramLine].value;
				
				text += "{" + width + "," + height + ",3";
				
				//alert("Canvas context " + context);
				
				for(var y = 0; y < image.height; y ++)
				{
					for(var x = 0; x < image.width; x ++)
					{
						text += "," + data[(y * width + x) * 4 + 0];
						text += "," + data[(y * width + x) * 4 + 1];
						text += "," + data[(y * width + x) * 4 + 2];
					}
				}

				text += "}";
	
				this.programCells[this.focusedProgramLine].value = text;
				
				document.body.removeChild(canvas);
				
				alert("Longitud de los datos insertados: " + (width * height * 3 + 3) + " celdas");
				

				
			}
			
			
			var DoLoad1 = (file) =>
			{		
				var fileReader = new FileReader();
				
				
				var data = fileReader.readAsDataURL(file);
				var doLoadFunction = function() { DoLoad2(this.result); }
				
				fileReader.onload = doLoadFunction;
						
			}
			
			var DoLoad2 = (contents) =>
			{
				var image = new Image();
				image.crossOrigin = 'anonymous';
				image.src = contents;
				
				image.onload = function() { DoLoad3(image); };

			}			
			
			var input = document.createElement('input');
			input.style.display = 'none';
			input.type = "file";
			input.accept = ".png";
			document.body.appendChild(input);
			
			var doLoadFunction = function() { DoLoad1(this.files[0]); }
			
			input.addEventListener('change', doLoadFunction);
			input.click();
			document.body.removeChild(input);
			
		}
			

		// Screen
				
		screenCanvas;
		screenContext;

		screenGridCanvas;
		screenGridContext;

		screenBuffer;

		inputCanvas;
		inputContext;
		outputCanvas;
		outputContext;


		ScreenStart()
		{
			var screenPixelWidth  = preferences.screenWidth / configuration.screenWidth;
			var screenPixelHeight = preferences.screenHeight / configuration.screenHeight;
			
			this.screenBox = document.getElementById("screenBox");
			this.screenBox.style.position = "relative";
			this.screenBox.style.width  = screenPixelWidth * (configuration.screenWidth  + 2) + "cm";
			this.screenBox.style.height = screenPixelHeight * (configuration.screenHeight  + 2) + "cm";			
			this.screenCanvas = document.getElementById("screen");
			this.screenCanvas.width = configuration.screenWidth;
			this.screenCanvas.height = configuration.screenHeight;
			this.screenCanvas.style.position = "absolute";
			this.screenCanvas.style.top = screenPixelHeight + "cm";
			this.screenCanvas.style.left = screenPixelWidth + "cm";		
			this.screenCanvas.style.width = configuration.screenWidth * screenPixelWidth + "cm";
			this.screenCanvas.style.height = configuration.screenHeight * screenPixelHeight + "cm";
			this.screenCanvas.style.imageRendering = "crisp-edges";
			
			this.screenContext = this.screenCanvas.getContext("2d");
			
			this.screenGridCanvas = document.getElementById("screenGrid");
			this.screenGridCanvas.width = preferences.screenGridResolutionWidth;
			this.screenGridCanvas.height = preferences.screenGridResolutionHeight;
			this.screenGridCanvas.style.position = "absolute";
			this.screenGridCanvas.style.top = 0 + "cm";
			this.screenGridCanvas.style.left = 0 + "cm";		
			this.screenGridCanvas.style.width = screenPixelWidth * (configuration.screenWidth  + 2) + "cm";
			this.screenGridCanvas.style.height = screenPixelHeight * (configuration.screenWidth  + 2) + "cm";
			
			this.screenGridContext = this.screenGridCanvas.getContext("2d");
						
			var gridPixelsXPerScreenPixelX = preferences.screenGridResolutionWidth / (configuration.screenWidth + 2);
			var gridPixelsYPerScreenPixelY = preferences.screenGridResolutionHeight / (configuration.screenHeight + 2);
			

			this.screenGridContext.globalAlpha = 0.45;
		
			this.screenGridContext.lineWidth = gridPixelsXPerScreenPixelX / 10;
			this.screenGridContext.strokeStyle = preferences.screenGridColor;			
			
			for(var x = 0; x < configuration.screenWidth; x ++)
			{
				var drawPositionX = (x + 1) *  gridPixelsXPerScreenPixelX;
				
				// Draw digits along X axis
				
				if(configuration.screenWidth >= 10)
				{
					var digit1 = Math.floor((x % 100) / 10);
					this.screenGridContext.drawImage(this.screenGridDigits[digit1], drawPositionX, 0, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);
					this.screenGridContext.drawImage(this.screenGridDigits[digit1], drawPositionX, (configuration.screenHeight + 1) * gridPixelsYPerScreenPixelY, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);
				}
				
				var digit2 = x % 10;				
				this.screenGridContext.drawImage(this.screenGridDigits[digit2], drawPositionX + 0.5 * gridPixelsXPerScreenPixelX, 0, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);
				this.screenGridContext.drawImage(this.screenGridDigits[digit2], drawPositionX + 0.5 * gridPixelsXPerScreenPixelX, (configuration.screenHeight + 1) * gridPixelsYPerScreenPixelY, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);
				
				// Draw vertical lines

				this.screenGridContext.beginPath();
				this.screenGridContext.moveTo(drawPositionX, gridPixelsYPerScreenPixelY);
				this.screenGridContext.lineTo(drawPositionX, preferences.screenGridResolutionHeight - gridPixelsYPerScreenPixelY);
				this.screenGridContext.stroke();
				
			}
			
			this.screenGridContext.lineWidth = gridPixelsYPerScreenPixelY / 10;

			for(var y = 0; y < configuration.screenHeight; y ++)
			{
				var drawPositionY = (y + 1) *  gridPixelsYPerScreenPixelY;

				// Draw digits along Y axis

				if(configuration.screenHeight >= 10)
				{
					var digit1 = Math.floor((y % 100) / 10);
					this.screenGridContext.drawImage(this.screenGridDigits[digit1], 0, drawPositionY, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);
					this.screenGridContext.drawImage(this.screenGridDigits[digit1], (configuration.screenWidth + 1) * gridPixelsXPerScreenPixelX, drawPositionY, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);
					
				}
				
				var digit2 = y % 10;				
				this.screenGridContext.drawImage(this.screenGridDigits[digit2], 0.5 * gridPixelsXPerScreenPixelX , drawPositionY, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);
				this.screenGridContext.drawImage(this.screenGridDigits[digit2], (configuration.screenWidth + 1.5) * gridPixelsXPerScreenPixelX , drawPositionY, 0.5 * gridPixelsXPerScreenPixelX, gridPixelsYPerScreenPixelY);

				// Draw horizontal lines

				this.screenGridContext.beginPath();
				this.screenGridContext.moveTo(gridPixelsXPerScreenPixelX, drawPositionY);
				this.screenGridContext.lineTo(preferences.screenGridResolutionWidth - gridPixelsXPerScreenPixelX, drawPositionY);
				this.screenGridContext.stroke();
				
			}

			this.screenGridContext.globalAlpha = 1.0;			
			
						
			this.screenBuffer = this.screenContext.createImageData(configuration.screenWidth, configuration.screenHeight);
			

			// Layout memory
			
			this.screenControlMemoryClearColorOffset = 0;
			this.screenControlMemoryColorKeyOffset = this.screenControlMemoryClearColorOffset + configuration.screenDepth;
			this.screenControlMemoryFlipXOffset = this.screenControlMemoryColorKeyOffset + configuration.screenDepth;
			this.screenControlMemoryFlipYOffset = this.screenControlMemoryFlipXOffset + 1;
			this.screenControlMemoryColorKeyEnabledOffset = this.screenControlMemoryFlipYOffset + 1;
			

			this.ScreenShow();
			
			
			//this.refreshScreenTicks = configuration.processorFrequency / configuration.screenFrequency;
			//this.refreshScreenTickCount = 0;						
		
		}
		
		ScreenShow()
		{
			var bufferData = this.screenBuffer.data;
			
			for(var y = 0; y < configuration.screenHeight; y ++)
			{
				for(var x = 0; x < configuration.screenWidth; x ++)
				{
					var memoryIndex = this.ScreenGetPixelsStartAddress() + configuration.screenDepth * (y * configuration.screenWidth + x);
					
					var r;
					var g;
					var b;
					
					if(configuration.screenDepth == 1)
					{
						r = this.memory[memoryIndex];
						g = this.memory[memoryIndex];
						b = this.memory[memoryIndex];
						
					}
					else // configuration.screenDepth == 3
					{
						r = this.memory[memoryIndex + 0];
						g = this.memory[memoryIndex + 1];
						b = this.memory[memoryIndex + 2];
					
					}
					
					
					var dataIndex = 4 * (y * configuration.screenWidth + x);
					bufferData[dataIndex + 0] = r;
					bufferData[dataIndex + 1] = g;
					bufferData[dataIndex + 2] = b;
					bufferData[dataIndex + 3] = 255;
				}
			}
			
			this.screenContext.putImageData(this.screenBuffer, 0, 0);			
			
		}
		
		// Input output
		
		InputOutputStart(isInput)
		{
			var canvas;
			var context;
			
			var inputCharacterSize = preferences.screenWidth / configuration.inputMemorySize;
			var outputCharacterSize = preferences.screenWidth / configuration.outputMemorySize;
			
			canvas = document.getElementById(isInput ? "input" : "output");			
			canvas.width = preferences.inputOutputWidth;
			canvas.height = preferences.inputOutputHeight;
			canvas.style.width = (isInput ? configuration.inputMemorySize : configuration.outputMemorySize) * (isInput ? inputCharacterSize : outputCharacterSize) + "cm";
			canvas.style.height = (isInput ? inputCharacterSize : outputCharacterSize) + "cm";
			
			context = canvas.getContext("2d");
			
			if(isInput)
			{ 
				this.inputCanvas = canvas;
				this.inputContext = context;
			}
			else
			{
				this.outputCanvas = canvas;
				this.outputContext = context;
			}

			for(var i = 0; i < (isInput ? configuration.inputMemorySize : configuration.outputMemorySize); i ++)
			{
				this.memory[(isInput ? this.inputMemoryAddress: this.outputMemoryAddress) + i] = 0;				
			}
				
			
		}

		InputOutputShow(isInput)
		{
			var lineEnded = false;
			
			
			for(var i = 0; i < (isInput ? configuration.inputMemorySize : configuration.outputMemorySize); i ++)
			{
				var c;
				
				if(!lineEnded)
				{
					c = this.memory[(isInput ? this.inputMemoryAddress : this.outputMemoryAddress) + i];
					if(c == 0) { lineEnded = true; }
				}
				else { c = 0;}
									
				var fontCharacterIndex = constants.inputOutputFontMap[c];
				
				var fontCharacterX = fontCharacterIndex % constants.inputOutputFontColumns;
				var fontCharacterY = Math.floor(fontCharacterIndex / constants.inputOutputFontColumns);
				
				var fontCharacterWidth = Math.floor(constants.inputOutputFontWidth / constants.inputOutputFontColumns);
				var fontCharacterHeight = Math.floor(constants.inputOutputFontHeight / constants.inputOutputFontRows);				
				
				var inputOutputCharacterWidth = preferences.inputOutputWidth / (isInput ? configuration.inputMemorySize : configuration.outputMemorySize);
				var inputOutputCharacterHeight = preferences.inputOutputHeight;
				
				var context = (isInput ? this.inputContext : this.outputContext);
					
				context.drawImage(this.inputOutputFont, fontCharacterX * fontCharacterWidth, fontCharacterY * fontCharacterHeight, fontCharacterWidth, fontCharacterHeight,
											i * inputOutputCharacterWidth, 0, inputOutputCharacterWidth, inputOutputCharacterHeight);

				
			}
			
			
			
		}
		
		// Keyboard

		KeyboardStart()
		{
			this.keyboardKeysState = new Array(constants.keyboardKeyCodeCount);
			
			for(var i = 0; i < constants.keyboardKeyCodeCount; i ++) { this.keyboardKeysState[i] = false; }
			
			this.inputWaitString = false
			this.inputStringReady = false;
			this.inputWaitStringDestinationInstructionIndex = 0;
			this.inputWaitStringDestinationArgIndex = 0;
			this.inputWaitStringIsNumber = false;
			
			this.inputWaitCharacter = false;
			this.inputCharacterReady = false;
			this.inputWaitCharacterDestinationInstructionIndex = 0;
			this.inputWaitCharacterDestinationArgIndex = 0;
		}
		
		KeyboardDoReadNumberString(argInstructionIndex, argIndex)
		{
			var i = 0;
			var markFound = false;
			var text = "";
			
			do					
			{
				if(this.memory[this.inputMemoryAddress + i] == 0)
				{
					markFound = true;
				}
				else
				{
					text += String.fromCharCode(this.memory[this.inputMemoryAddress + i]);
					i ++;
				}
			}
			while(i < configuration.inputMemorySize && !markFound)

			for(var i = 0; i < configuration.inputMemorySize; i ++)
			{
				this.memory[this.inputMemoryAddress + i] = 0;
			}
			
			var value = parseInt(text);
			
			if(Number.isNaN(value))
			{
				value = 0;
			}
			
			this.ProgramWriteArg(argInstructionIndex, argIndex, value);
			
		}
		
		KeyboardDoReadString(address)
		{
		
			var i = 0;
			var markFound = false;
			
			do					
			{
				if(this.memory[this.inputMemoryAddress + i] == 0)
				{
					this.memory[address + i] = 0;
					markFound = true;
				}
				else
				{
					this.memory[address + i] = this.memory[this.inputMemoryAddress + i];
					i ++;
				}
			}
			while(i < configuration.inputMemorySize && !markFound)

			

			for(var i = 0; i < configuration.inputMemorySize; i ++)
			{
				this.memory[this.inputMemoryAddress + i] = 0;
			}
			
		}
		
		KeyboardDoWriteCharacter(c)
		{
			var memorySize = this.MemoryGetSize();
			var done = false;
			var i = 0;
			
			while(!done && i < configuration.outputMemorySize)
			{
				if(this.memory[this.outputMemoryAddress + i] == 0)
				{
					this.memory[this.outputMemoryAddress + i] = c;
					done = true;
				}
				else
				{
					i ++;
				}
						
			}
			
			if(!done)
			{
				for(var i = 1; i < configuration.outputMemorySize; i ++)
				{
					this.memory[this.outputMemoryAddress + i - 1] = this.memory[this.outputMemoryAddress + i];
				}
				
				this.memory[this.outputMemoryAddress + configuration.outputMemorySize - 1] = c;
			}			
		}
		
		// Audio
		
		
		AudioStart()
		{
			this.lastGeneratedTone = [];			
		}
		
		// Dynamic memory
		
		DynamicMemoryStart()
		{
			for(var i = 0; i < configuration.dynamicMemorySize; i ++)
			{
				this.memory[this.dynamicMemoryAddress + i] = 0;
			}
			
			this.dynamicAllocations = new Array();
			
			this.dynamicMemoryMap = new Array(configuration.dynamicMemorySize);
			
			for(var i = 0; i < configuration.dynamicMemorySize; i ++)
			{
				this.dynamicMemoryMap[i] = 0
			}
						
		}
		
		DynamicMemoryReset()
		{
			for(var i = 0; i < configuration.dynamicMemorySize; i ++)
			{
				this.memory[this.dynamicMemoryAddress + i] = 0;
			}
			
			this.dynamicAllocations = new Array();
			
			this.dynamicMemoryMap = new Array(configuration.dynamicMemorySize);	

			for(var i = 0; i < configuration.dynamicMemorySize; i ++)
			{
				this.dynamicMemoryMap[i] = 0
			}
			
		}
		
		DynamicMemoryShow()
		{
			for(var i = this.dynamicMemoryAddress; i < this.dynamicMemoryAddress + configuration.dynamicMemorySize; i++)
			{
				var memoryCell = this.memoryCells[i];
				memoryCell.style.backgroundColor = preferences.memoryBackgroundColor;								
			}
			
			for(var i = 0; i < this.dynamicAllocations.length; i++)
			{
				var allocation = this.dynamicAllocations[i];
				
				for(var j = 0; j < allocation.size; j ++)
				{
					var memoryCell = this.memoryCells[allocation.baseAddress + j];
					memoryCell.style.backgroundColor = "rgb(" + allocation.color[0] + ", " + allocation.color[1] + ", " + allocation.color[2] + ")";
				}
			}

			
		}
		
		DynamicMemoryAllocate(requiredSize)
		{
			var allocationBaseAddress = this.dynamicMemoryAddress;
			var freeCounter = 0;
			var i = 0;
			
			//alert("Requerido " + requiredSize);
			//alert("Probando " + allocationBaseAddress);

			while(freeCounter < requiredSize && i < configuration.dynamicMemorySize)
			{
				//alert("Consultando si la posición de mapa " + i + " está ocupada");
				if(this.dynamicMemoryMap[i] == 0)
				{
					freeCounter ++;
					
					//alert("Celdas libres encontradas " + freeCounter);
				}
				else
				{
					allocationBaseAddress = this.dynamicMemoryAddress + i + 1;
					freeCounter = 0;
					
					//alert("Probando " + allocationBaseAddress);					
				}
				
				i ++;
			}
			
			if(freeCounter == requiredSize)
			{
				// Successful allocation
				
				//alert("Alocatación conseguida");
				
				var allocationColor = [Math.floor(20 + Math.random() * 100), Math.floor(20 + Math.random() * 100), Math.floor(20 + Math.random() * 100)];

				var allocation = { baseAddress: allocationBaseAddress, size: requiredSize, color: allocationColor }				
				this.dynamicAllocations.push(allocation);
				
				for(var i = 0; i < requiredSize; i ++)
				{
					//alert("Marcando como ocupada posición de mapa " + (allocationBaseAddress - this.dynamicMemoryAddress + i));
					this.dynamicMemoryMap[allocationBaseAddress - this.dynamicMemoryAddress + i] = 1;
				}
				
				return allocationBaseAddress;
			}
			else
			{
				// Unsuccessful allocation
				
				//alert("Alocatación no conseguida");

				return 0;
			}
			
		}
		
		DynamicMemoryRelease(address)
		{
			var found = false;
			var index = 0;
			var i = 0;
			
			while(i < this.dynamicAllocations.length && !found)
			{
				if(this.dynamicAllocations[i].baseAddress == address)
				{
					found = true;
					index = i;
				}
				else
				{
					i ++;
				}
			}
			
			if(found)
			{
				var allocation = this.dynamicAllocations[index];
				
				for(var i = 0; i < allocation.size; i ++)
				{
					this.dynamicMemoryMap[allocation.baseAddress - this.dynamicMemoryAddress + i] = 0;
					this.memory[allocation.baseAddress + i] = 0;
				}
				
				this.dynamicAllocations.splice(index, 1);
			}
			
			
		}
		
		TimerStart()
		{
			this.timerReferenceTime = 0;
			
			this.timerDisplayCell = document.getElementById("TiempoActual");
			
			this.timerReferenceTimes = new Array(configuration.timers);
			
		}
		
		TimerGetMemorySize()
		{
			return configuration.timers;
		}
		
		TimerEnterStateRunning()
		{
			for(var i = 0; i < configuration.timers; i ++)
			{
				this.timerReferenceTimes[i] = Date.now() - parseInt(this.memoryCells[this.timerMemoryAddress + i].value);
			}
		}
		
		TimerProcessorTick()
		{
			var time = Date.now();
			for(var i = 0; i < configuration.timers; i ++)
			{
				this.memory[this.timerMemoryAddress + i] = time - this.timerReferenceTimes[i];
			}
		}
		
		TimerReset(index)
		{
			this.memory[this.timerMemoryAddress + index] = 0;
			this.timerReferenceTimes[index] = Date.now();
		}
		
		TimerGetValue(index)
		{
			return this.memory[this.timerMemoryAddress + index];
		}
		
		TimerShow()
		{
			for(var i = 0; i < configuration.timers; i ++)
			{
				var value = this.memory[this.timerMemoryAddress + i];
				this.memoryCells[this.timerMemoryAddress + i].value = value;
				this.timerDisplayCell.value = MachineUtils.Pad(value, constants.timerDisplayCellDigits);
			}
			
		}
		
		Start()
		{
			this.applyConfigurationPressed = false;
			this.resetPressed = false;
			this.clearProgramPressed = false;
			this.clearMemoryLabelsPressed = false;
			this.stepPressed = false;
			this.runPressed = false;
			this.stopPressed = false;
			this.keyPressed = false;
			this.keyPressedCode = 0;
			this.keyReleased = false;
			this.keyReleasedCode = 0;
			this.keyboardKeysState = new Array();
			this.shortcutEnabled = false;
			this.enableToneGenerator = false;
			this.insertProgramLinePressed = false;
			this.deleteProgramLinePressed = false;			
			this.insertStringDataPressed = false;
			this.insertImageDataPressed = false;
			this.newProjectPressed = false;			
			this.loadProjectPressed = false;			
			this.saveProjectPressed = false;			
			this.memory = new Array();
			this.program = new Array();
			this.registers = new Array();
			this.registersCells = new Array();
			this.memoryCells = new Array();
			this.memoryLabelsCells = new Array();
			this.programCells = new Array();
			this.programLabelsCells = new Array();
			this.focusedProgramLine = 0;
			this.waitTimer = false;
			this.waitTimerReferenceTime = 0;
			this.waitTimerTargetTime = 0;
			this.showOnRunPressed = false;
			this.dialogOpenPressed = false;
			this.dialogOpenId = dialogId.none;
			this.dialogClosePressed = false;
			this.helpShowPressed = false;
			this.helpShowPressedId = helpId.none;
			
			this.buttonNewProject = document.getElementById("NewProject");
			this.buttonLoadProject = document.getElementById("LoadProject");
			this.buttonSaveProject = document.getElementById("SaveProject");
			this.buttonConfiguration = document.getElementById("Configuration");
			this.buttonProcessorReset = document.getElementById("ResetProcessor");
			this.buttonRun = document.getElementById("Run");
			this.buttonStep = document.getElementById("Step");
			this.buttonStop = document.getElementById("Stop");
			this.buttonShowOnRun = document.getElementById("ShowOnRun");
			this.buttonAbout = document.getElementById("About");
			this.buttonHelp = document.getElementById("OpenHelp");
			
			this.buttonStop.style.opacity = 0.35;
			
			this.step = false;
		
			this.state = states.stateStopped;
			this.nextState = states.stateStopped;
			
			this.ThemeStart();
			
			this.DialogStart();
			
			this.AboutStart();

			this.HelpStart();
			
			this.ShowOnRunStart();
			
			this.ConfigurationStart();
			
			this.CommentStart();
			
			this.DataStart();
			
			this.MemoryStart();
			
			this.TimerStart();

			this.DynamicMemoryStart();

			this.RegistersStart();
						
			this.ProgramStart();
			
			this.ScreenStart();
			
			this.InputOutputStart(true);
			this.InputOutputStart(false);

			this.KeyboardStart();
			
			this.AudioStart();
		
			
			// Reset everything
			
			this.DynamicMemoryReset();
			this.MemoryReset();
			this.ProgramClear();
			this.ProcessorReset();

			this.ConfigurationShow();
			
			this.isStarted = true;
			
			

		}
		
		PrepareRestart()
		{
			this.MemoryPrepareRestart();
			this.ProgramPrepareRestart();
			
		}
		
		IsRunning()
		{
			return (this.state == states.stateRunning);
		}
		
		ProcessorTick()
		{
			var showScreen = false;
			var showRandomGenerator = false;
			var showTimer = false;
			var showKeyboard = false;
			var showAudio = false;
			var showMemory = false;
			var showRegisters = false;
			var showCurrentInstruction = false;
			var showStack = false;
			var showDynamicMemory = false;
			//var forceRefreshScreen = false;
			
			if(this.keyPressed)
			{

				if(this.keyPressedCode >= 0 && this.keyPressedCode < constants.keyboardKeyCodeCount)
				{
					this.keyboardKeysState[this.keyPressedCode] = true;
				}
			}
			
			if(this.keyReleased)
			{
				if(this.keyReleasedCode >= 0 && this.keyReleasedCode < constants.keyboardKeyCodeCount)
				{
					this.keyboardKeysState[this.keyReleasedCode] = false;
				}
			}			
			
			// Update shortcuts
			
			if(this.keyPressed)
			{
				if(this.keyPressedCode == constants.keyboardShortcutEnable) { this.shortcutEnabled = true; }
				

				if(this.keyPressedCode == constants.keyboardShortcutInsert) { this.insertProgramLinePressed = true; }
				else if(this.keyPressedCode == constants.keyboardShortcutDelete) { this.deleteProgramLinePressed = true; }
				
				
				if(this.shortcutEnabled)
				{
					if(this.keyPressedCode == constants.keyboardShortcutRun && this.state == states.stateStopped)
					{
						this.runPressed = true;
					}
					else if(this.keyPressedCode == constants.keyboardShortcutStep)
					{
						this.stepPressed = true;
					}
					else if(this.keyPressedCode == constants.keyboardShortcutReset)
					{
						this.resetPressed = true;
					}
					else if(this.keyPressedCode == constants.keyboardShortcutStop && this.state == states.stateRunning)
					{
						this.stopPressed = true;
					}					
					else if(this.keyPressedCode == constants.keyboardShortcutDebug)
					{
						this.showOnRunPressed = true;
					}					
					else if(this.keyPressedCode == constants.keyboardShortcutLoad)
					{
						this.loadProjectPressed = true;
					}					
					else if(this.keyPressedCode == constants.keyboardShortcutSave)
					{
						this.saveProjectPressed = true;
					}					
					else if(this.keyPressedCode == constants.keyboardShortcutNew)
					{
						this.newProjectPressed = true;
					}					
					else if(this.keyPressedCode == constants.keyboardShortcutConfiguration)
					{
						if(this.currentDialog == dialogId.none) { this.DialogOpen(dialogId.configuration); }
					}					
					else if(this.keyPressedCode == constants.keyboardShortcutAbout)
					{
						if(this.currentDialog == dialogId.none) { this.DialogOpen(dialogId.about); }
					}					
					else if(this.keyPressedCode == constants.keyboardShortcutHelp)
					{
						if(this.currentDialog == dialogId.none) { this.DialogOpen(dialogId.help); }
					}					
				}
			}
			
			if(this.keyReleased)
			{
				if(this.keyReleasedCode == constants.keyboardShortcutEnable) { this.shortcutEnabled = false; }
			}

			if(this.state == states.stateRunning)
			{
				var instructionResult = constants.instructionResultContinue;
				var tickSuccess = true;
				
				// Timer tick
				
				this.TimerProcessorTick()
				
				// Keyboard tick
				
				if(this.keyPressed)
				{
					if(this.keyPressedCode >= 0 && this.keyPressedCode < constants.keyboardKeyCodeCount)
					{
						
						if(this.inputWaitCharacter)
						{
							this.inputCharacterReady = true;
						}
						if(this.inputWaitString)
						{
							if(this.keyPressedCode == constants.keyboardIntroCode)
							{
								this.inputStringReady = true;
							}
							else if(!this.inputStringReady)
							{
								// Handle line editing
								
								var i = 0;
								var last = 0;
								var found = false;
								
								while(i < configuration.inputMemorySize && !found)
								{
									if(this.memory[this.inputMemoryAddress + i] == 0)
									{
										found = true;
										last = i;
									}
									else
									{
										i ++;
									}
								}
								
								if(this.keyPressedCode == constants.keyboardBackspaceCode)
								{
									if(found)
									{   if(last > 0)
										{ this.memory[this.inputMemoryAddress + last - 1] = 0; }
									}
									else
									{  this.memory[this.inputMemoryAddress + configuration.inputMemorySize - 1] = 0; }
								}
								else
								{	if(found)
									{ this.memory[this.inputMemoryAddress + last] = this.keyPressedCode; }
								}
								
							}
							
						}
						
					}
				}


				
				if(this.stopPressed)
				{
					this.nextState = states.stateStopped;
				}
				else if(this.waitTimer)
				{
					if(Date.now() - this.waitTimerReferenceTime > this.waitTimerTargetTime)
					{ this.waitTimer = false; }
					
				}
				else if(this.inputWaitCharacter)
				{
					if(this.inputCharacterReady)
					{
						this.ProgramWriteArg(this.inputWaitCharacterDestinationInstructionIndex, this.inputWaitCharacterDestinationArgIndex, this.keyPressedCode);
						
						this.inputCharacterReady = false;
						this.inputWaitCharacter = false;
					}
				}
				else if(this.inputWaitString)
				{
					if(this.inputStringReady)
					{
						if(this.inputWaitStringIsNumber)
						{
							this.KeyboardDoReadNumberString(this.inputWaitStringDestinationInstructionIndex, this.inputWaitStringDestinationArgIndex);
						}
						else
						{
							this.KeyboardDoReadString(this.inputWaitStringDestinationAddress);

						}
						
						this.inputStringReady = false;
						this.inputWaitString = false;
					}
				}
				else
				{
					try
					{
						instructionResult = this.ExecuteInstruction();
					}
					catch(e)
					{
						alert("Se ha producido un error interno en la MiniBoy durante la ejecución del programa. Guarda tu trabajo y vuelve a cargar la página.\n\nError: Line " + e.lineNumber + ": " + e);
						tickSuccess = false;
					}
					
				}
				
				if(this.step && !(this.inputWaitString || this.waitTimer || this.inputWaitCharacter))
				{
					this.nextState = states.stateStopped;				
					this.step = false;
					
				}
				else if(instructionResult == constants.instructionResultProgramEnd || instructionResult == constants.instructionResultInterrupt || !tickSuccess )
				{
					this.nextState = states.stateStopped;
				}

				
				//showScreen = true;
				//showPeripheralsState = true;
				//showMemory = true;
				
				if(preferences.showOnRun)
				{
					showMemory = true;
					showRegisters = true;
					showCurrentInstruction = true;
					showStack = true;
					showDynamicMemory = true;
					showTimer = true;
					showKeyboard = true;
					showRandomGenerator = true;
					showAudio = true;				
					
				}

				
				
				
				
			}
			else // this.state == states.stateStopped
			{
				// Update program editor								
					
				
				if(document.activeElement != null)
				{
					for(var i = 0; i < configuration.programSize; i ++)
					{
						if(this.programCells[i] === document.activeElement)
						{
							this.focusedProgramLine = i;
						}
					}
					
				}
				
				
				if(this.insertProgramLinePressed)
				{
					if(this.programCells[configuration.programSize - 1].value.trim() != "" || this.programLabelsCells[configuration.programSize - 1].value.trim() != "" )
					{
						alert("No puedes insertar una nueva línea en el programa porque se perdería el texto o la etiqueta que tienes en la última");
					}
					else
					{
						for(var i = configuration.programSize - 1; i > this.focusedProgramLine; i --)
						{
							this.programCells[i].value = this.programCells[i - 1].value;
							this.programLabelsCells[i].value = this.programLabelsCells[i - 1].value;
						}
						
						this.programCells[this.focusedProgramLine].value = "";
						this.programLabelsCells[this.focusedProgramLine].value = "";
					}
					
				}
				
				if(this.deleteProgramLinePressed)
				{
					for(var i = this.focusedProgramLine; i < configuration.programSize - 2; i ++)
					{
						this.programCells[i].value = this.programCells[i + 1].value;
						this.programLabelsCells[i].value = this.programLabelsCells[i + 1].value;
					}
					
					this.programCells[configuration.programSize - 1].value = "";					
					this.programLabelsCells[configuration.programSize - 1].value = "";
				}
				
				if(this.insertStringDataPressed)
				{
					this.ProgramInsertStringData();
				}

				if(this.insertImageDataPressed)
				{
					this.ProgramInsertImageData();
				}

				if(this.showOnRunPressed)
				{
					preferences.showOnRun = !preferences.showOnRun;
					this.showOnRunCell.style.backgroundColor = (preferences.showOnRun ? "white" : "rgb(50,50,50)");
					this.showOnRunCell.style.color = (preferences.showOnRun ? "rgb(50,50,50)" : "white");
				}

				
				if(this.enableToneGenerator)
				{		
					this.audioContext = new AudioContext();
					this.oscillator = [];
					this.oscillatorConnected = [];
					
					for(var i = 0; i < configuration.audioChannels; i++)
					{
						this.oscillator[i] = this.audioContext.createOscillator();
						this.oscillator[i].type = 'square';
						this.oscillator[i].start();
						this.oscillatorConnected[i] = false;
					}
					
					var button = document.getElementById("EnableToneGenerator");
					button.style.visibility = "hidden";
				}
				
				if(this.dialogOpenPressed)
				{
					this.DialogOpen(this.dialogOpenId);
				}
				
				if(this.dialogClosePressed)
				{
					this.DialogClose();
				}
				
				if(this.helpShowPressed)
				{
					this.HelpShow(this.helpShowPressedId);
				}
				
				
				
				if(this.applyConfigurationPressed || this.resetPressed || this.clearProgramPressed || this.clearMemoryLabelsPressed || this.newProjectPressed || this.loadProjectPressed || this.saveProjectPressed)
				{
					if(this.applyConfigurationPressed)
					{
						var result = this.ConfigurationCheckNewConfiguration();
						
						if(result)
						{
							var result = confirm("Esta operación devolverá la máquina a su estado inicial, preservando sólo las etiquetas que hayas definido en la memoria estática, el programa y los recursos ¿Estás seguro/a?");
							if(result)
							{
								this.DialogClose();
								
								// Preserve static memory labels, program and data
								
								var previousMemoryLabels = new Array(configuration.staticMemorySize);
								for(var i = 0; i < configuration.staticMemorySize; i ++) { previousMemoryLabels[i] = this.memoryLabelsCells[this.staticMemoryAddress + i].value; }

								var previousProgramLabels = new Array(configuration.programSize);
								for(var i = 0; i < configuration.programSize; i ++) { previousProgramLabels[i] = this.programLabelsCells[i].value; }
								var previousProgram = new Array(configuration.programSize);
								for(var i = 0; i < configuration.programSize; i ++) { previousProgram[i] = this.programCells[i].value; }
								
								
								
								this.PrepareRestart();
								this.ConfigurationApplyNewConfiguration();
								this.Start();
								
								// Restore static memory labels, program and data
								
								var restoreMemoryNumCells = Math.min(previousMemoryLabels.length, configuration.staticMemorySize);
								var restoreProgramNumCells = Math.min(previousProgramLabels.length, configuration.programSize);
																
								for(var i = 0; i < restoreMemoryNumCells; i ++) { this.memoryLabelsCells[this.staticMemoryAddress + i].value = previousMemoryLabels[i]; }
								for(var i = 0; i < restoreProgramNumCells; i ++)
								{
									this.programLabelsCells[i].value = previousProgramLabels[i];
									this.programCells[i].value = previousProgram[i];
								
								}
								
							}
						}
							
					}
					else if(this.newProjectPressed)
					{
						var result = confirm("Perderás los contenidos de la memoria y los valores almacenados en los registros del procesador ¿Estás seguro/a?");
						if(result)
						{						
							this.ProjectNew();
						}
					}
					else if(this.loadProjectPressed)
					{
						this.ProjectLoad();
					}
					else if(this.saveProjectPressed)
					{
						this.ProjectSave();
					}
					else
					{
						if(this.resetPressed)
						{
							var result = confirm("Se reiniciarán los contenidos de la memoria y los registros del procesador ¿estás seguro/a?");
							if(result)
							{
								this.DynamicMemoryReset();
								this.MemoryReset();
								this.ProcessorReset();
							}
						}
						else if(this.clearMemoryLabelsPressed)
						{
							var result = confirm("Perderás las etiquetas que hayas definido en la memoria  ¿estás seguro/a?");
							
							if(result)
							{
								this.MemoryClearLabels();
							}
							
						}

						else // this.clearProgramPressed
						{
							var result = confirm("Se perderá el programa actual ¿estás seguro/a?");
							
							if(result)
							{
								this.ProgramClear();
								
							}
							
						}
					}
					
					this.nextState = states.stateStopped;
				}
				
				
				if(this.runPressed)
				{
					var success;
					
					this.ProgramUpdateLabels();
					this.DataClear();
					
					try
					{
						success = this.ProgramCompile();
					}
					catch(e)
					{
						alert("Se ha producido un error interno en la MiniBoy durante la compilación del programa. Guarda tu trabajo y vuelve a cargar la página.\n\nError: Line " + e.lineNumber + ": " + e);
						success = false;
					}

						
					if(success)
					{
						this.nextState = states.stateRunning;
					}
				}
				else if(this.stepPressed)
				{
					var success;
					var pc;
					
					this.ProgramUpdateLabels();
					this.DataClear();
				
					try
					{
						pc = this.registers[registerId.pc];
						success = this.ProgramCompileInstruction(pc);
					}
					catch(e)
					{
						alert("Se ha producido un error interno en la MiniBoy. Guarda tu trabajo y vuelve a cargar la página.\nError: Line " + e.lineNumber + ": " + e);
						success = false;
					}
					
					if(success)
					{
						this.nextState = states.stateRunning;
						this.step = true;
					}
						
				}
			}				
			
			if(this.state != this.nextState)
			{
				if(this.state == states.stateRunning)
				{
					this.DoExitStateRunning();
				}
				
				if(this.nextState == states.stateStopped)
				{
					if(this.audioContext != null)
					{
						for(var i = 0; i < configuration.audioChannels; i ++)
						{
							if(this.oscillatorConnected[i])
							{
								this.oscillator[i].disconnect(this.audioContext.destination);
								this.oscillatorConnected[i] = false;	
							}
						
						}
					}
					
					showScreen = true;
					showTimer = true;
					showKeyboard = true;
					showRandomGenerator = true;
					showAudio = true;
					//forceRefreshScreen = true;
					showCurrentInstruction = true;
					showStack = true;
					showDynamicMemory = true;
					
				}
				else if(this.nextState == states.stateRunning)
				{
					this.DoEnterStateRunning();
				}
			
				this.state = this.nextState;
			}
			
		
			if(showTimer)
			{
				this.TimerShow();
			}
			
			if(showKeyboard)
			{
				document.getElementById("TeclaPulsada").value = MachineUtils.Pad(this.keyboardLastKeyPressed, 3);
			}
			
			if(showRandomGenerator)
			{
				document.getElementById("ValorAleatorioGenerado").value = MachineUtils.Pad(this.lastRandomNumber, 3);
			}
			
			if(showAudio)
			{
				var tones = "";
				for(var i = 0; i < configuration.audioChannels; i ++) { tones += (i > 0 ?  "/" : "") + MachineUtils.Pad(this.lastGeneratedTone[i], 3); }
				document.getElementById("TonoGenerado").value = tones;
			}
			
			if(showMemory)
			{
				this.MemoryShow();
			}
			
			if(showRegisters)
			{
				this.RegistersShow();
			}
			
			if(showCurrentInstruction)
			{
				for(var i = 0; i < configuration.programSize; i++)
				{
					var instruction = this.programCells[i];
					instruction.style.backgroundColor = preferences.instructionBackgroundColor;
				}
				
				var pc = parseInt(this.registersCells[registerId.pc].value);
				var currentInstruction = this.programCells[pc];				
				currentInstruction.style.backgroundColor = preferences.currentInstructionBackgoundColor;
			}
			
			if(showStack)
			{
				var sp = parseInt(this.registersCells[registerId.sp].value);

				for(var i = this.stackMemoryAddress; i < this.stackMemoryAddress + configuration.stackMemorySize; i++)
				{
					var memoryCell = this.memoryCells[i];
					if(i >= sp)	{ memoryCell.style.backgroundColor = preferences.stackDataBackgroundColor; }
					else { memoryCell.style.backgroundColor = preferences.memoryBackgroundColor; }
				}
				
				var bp = parseInt(this.registersCells[registerId.bp].value);
				
				if(bp < this.stackMemoryAddress + configuration.stackMemorySize)
				{				
					var currentBaseCell = this.memoryCells[bp];			
					currentBaseCell.style.backgroundColor = preferences.currentStackBaseBackgroundColor;
					
					var currentReturnAddressCell = this.memoryCells[bp + 2];
					
					var returnAddress = parseInt(currentReturnAddressCell.value);
					var returnInstruction = this.programCells[returnAddress];				
					returnInstruction.style.backgroundColor = preferences.currentStackBaseBackgroundColor;
					
				}
				
			}
			
			if(showDynamicMemory)
			{
				this.DynamicMemoryShow();
			}
			
			this.revertConfigurationPressed = false;
			this.applyConfigurationPressed = false;
			this.resetPressed = false;
			this.clearProgramPressed = false;
			this.clearMemoryLabelsPressed = false;
			this.stepPressed = false;
			this.runPressed = false;
			this.stopPressed = false;
			this.keyPressed = false;
			this.keyReleased = false;
			this.enableToneGenerator = false;
			this.saveMemoryPressed = false;
			this.saveProgramPressed = false;
			this.loadMemoryPressed = false;
			this.loadProgramPressed = false;
			this.insertProgramLinePressed = false;
			this.deleteProgramLinePressed = false;
			this.insertStringDataPressed = false;
			this.insertImageDataPressed = false;
			this.newProjectPressed = false;
			this.loadProjectPressed = false;			
			this.saveProjectPressed = false;
			this.showOnRunPressed = false;
			this.dialogOpenPressed = false;
			this.dialogClosePressed = false;
			this.helpShowPressed = false;

			
			

			
		}
		
		
		ExecuteInstruction()
		{
			var instructionIndex = this.registers[registerId.pc];
			var base = instructionIndex * constants.instructionSize;
			var opCode = this.program[base + 0];
			
			var isJump = false;
			var jumpAddress = 0;
			
			var instructionResult = constants.instructionResultContinue;
			

			if(opCode == opCodes.memMove)
			{
				var value = this.ProgramReadArg(instructionIndex, 1);
				
				this.ProgramWriteArg(instructionIndex, 0, value);
				
			}
			else if(opCode == opCodes.memMoveValueAddress)
			{
				var address = this.ProgramReadArg(instructionIndex, 1)
				
				var value = this.memory[address];

				this.ProgramWriteArg(instructionIndex, 0, value);
				
			}
			else if(opCode == opCodes.memMoveAddress)
			{
				var address = this.ProgramReadArgAddress(instructionIndex, 1);				
				this.ProgramWriteArg(instructionIndex, 0, address);
			}
			else if(opCode == opCodes.aluAdd || opCode == opCodes.aluSubstract ||
				   opCode == opCodes.aluMultiply || opCode == opCodes.aluDivide ||
				   opCode == opCodes.aluModulus)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 1);
				var value2 = this.ProgramReadArg(instructionIndex, 2);
				
				var result;
				if(opCode == opCodes.aluAdd) { result = value1 + value2;}
				else if(opCode == opCodes.aluSubstract) { result = value1 - value2;}
				else if(opCode == opCodes.aluMultiply) { result = value1 * value2;}
				else if(opCode == opCodes.aluDivide) { result = Math.floor(value1 / value2);}
				else // opCode == opCodes.aluModulus
				{ result = Math.floor(value1 % value2); }
				
				this.ProgramWriteArg(instructionIndex, 0, result);
				
			}
			else if(opCode == opCodes.aluGreater || opCode == opCodes.aluGreaterEqual ||
					opCode == opCodes.aluLess  || opCode == opCodes.aluLessEqual ||
					opCode == opCodes.aluEqual || opCode == opCodes.aluNotEqual )
			{
				var value1 = this.ProgramReadArg(instructionIndex, 1);
				var value2 = this.ProgramReadArg(instructionIndex, 2);
				
				var result;
				if(opCode == opCodes.aluGreater) { result = (value1 > value2 ? 1 : 0);}
				else if(opCode == opCodes.aluGreaterEqual) { result = (value1 >= value2 ? 1 : 0);}
				else if(opCode == opCodes.aluLess) { result = (value1 < value2 ? 1 : 0);}
				else if(opCode == opCodes.aluLessEqual) { result = (value1 <= value2 ? 1 : 0);}
				else if(opCode == opCodes.aluEqual) { result = (value1 == value2 ? 1 : 0);}
				else // opCode == opCodes.aluNotEqual
				{ result = (value1 != value2 ? 1 : 0); }
				
				this.ProgramWriteArg(instructionIndex, 0, result);
			}
			else if(opCode == opCodes.aluAnd || opCode == opCodes.aluOr || opCode == opCodes.aluNot)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 1);
				var value2 = null;
				if(opCode != opCodes.aluNot)
				{
					value2 = this.ProgramReadArg(instructionIndex, 2);
				}

				var result;
				if(opCode == opCodes.aluAnd) { result = ((value1 != 0) && (value2 != 0) ? 1 : 0);}
				else if(opCode == opCodes.aluOr) { result = ((value1 != 0) || (value2 != 0) ? 1 : 0);}
				else // opCode == opCodes.aluNot
				{ result = ((value1 != 0) ? 0 : 1);}

				this.ProgramWriteArg(instructionIndex, 0, result);
				
			}
			else if(opCode == opCodes.procJumpIfGreater || opCode == opCodes.procJumpIfGreaterEqual ||
					opCode == opCodes.procJumpIfLess || opCode == opCodes.procJumpIfLessEqual ||
					opCode == opCodes.procJumpIfEqual ||opCode == opCodes.procJumpIfNotEqual)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 0);
				var value2 = this.ProgramReadArg(instructionIndex, 1);
				var value3 = this.ProgramReadArg(instructionIndex, 2);
				
				if(opCode == opCodes.procJumpIfGreater) { if(value2 > value3) { isJump = true; jumpAddress = value1; } }
				else if(opCode == opCodes.procJumpIfGreaterEqual) { if(value2 >= value3) { isJump = true; jumpAddress = value1; } }
				else if(opCode == opCodes.procJumpIfLess) { if(value2 < value3) { isJump = true; jumpAddress = value1; } }
				else if(opCode == opCodes.procJumpIfLessEqual) { if(value2 <= value3) { isJump = true; jumpAddress = value1; } }
				else if(opCode == opCodes.procJumpIfEqual) { if(value2 == value3) { isJump = true; jumpAddress = value1; } }
				else // opCode == opCode.procJumpIfNotEqual
				{ if(value2 != value3) { isJump = true; jumpAddress = value1; } }
			}
			else if(opCode == opCodes.procJumpIfTrue || opCode == opCodes.procJumpIfFalse)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 0);
				var value2 = this.ProgramReadArg(instructionIndex, 1);
				
				if(opCode == opCodes.procJumpIfTrue) { if(value2 != 0) { isJump = true; jumpAddress = value1; } }
				else // opCode == opCodes.procJumpIfFalse
				{ if(value2 == 0) { isJump = true; jumpAddress = value1; } }

			}
			else if(opCode == opCodes.procJump)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 0);
				
				isJump = true;
				jumpAddress = value1;
			}
			else if(opCode == opCodes.procWait)
			{
				this.waitTimer = true;
				this.waitTimerReferenceTime = Date.now();
				this.waitTimerTargetTime = this.ProgramReadArg(instructionIndex, 0);
				
			}
			else if(opCode == opCodes.call)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 0);
				var value2 = this.ProgramReadArg(instructionIndex, 1);
				
				
				var sp =  this.registers[registerId.sp];
				
				if(sp - 1 <= this.stackMemoryAddress)
				{
					alert("No se puede hacer la llamada porque no queda espacio en la pila para almacenar los datos de retorno.");
					
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					this.memory[sp - 1] = instructionIndex + 1;
					this.memory[sp - 2] = value2;
					this.memory[sp - 3] = this.registers[registerId.bp];					
					this.registers[registerId.sp] = sp - 3;
					
					//this.registers[registerId.bp] = sp - 1;
					this.registers[registerId.bp] = sp - 3;
					
					isJump = true;
					jumpAddress = value1;
					
				}				
								
			}
			else if(opCode == opCodes.ret)
			{
				var sp = this.registers[registerId.sp];
				var bp = this.registers[registerId.bp];
				
				if(sp + 3 + numParams > this.stackMemoryAddress + this.stackMemorySize)
				{
					alert("Los datos de retorno no están en la pila ¿Has hecho la llamada correspondiente?");
					
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					// var previousBP = this.memory[bp - 2]
					// var numParams = this.memory[bp - 1];
					// var returnAddress = this.memory[bp];
					var previousBP = this.memory[bp]
					var numParams = this.memory[bp + 1];
					var returnAddress = this.memory[bp + 2];					
					
					this.memory[sp] = 0;
					this.memory[sp + 1] = 0;
					this.memory[sp + 2] = 0;
				
					for(var i = 0; i < numParams; i ++) { this.memory[sp + 2 + i + 1] = 0; }
					
					this.registers[registerId.sp] = sp + 3 + numParams;
					
					this.registers[registerId.bp] = previousBP;
					
					isJump = true;
					jumpAddress = returnAddress;
					
					
				}
				

			}
			else if(opCode == opCodes.keyboardIsKeyPressed)
			{
				var code = this.ProgramReadArg(instructionIndex, 1);
				var result = 0;
				
				if(code >= 0 && code < constants.keyboardKeyCodeCount)
				{ result = this.keyboardKeysState[code] ? 1 : 0; }
				
				this.ProgramWriteArg(instructionIndex, 0, result);
			}
			else if(opCode == opCodes.memSetData)
			{
				var address = this.ProgramReadArg(instructionIndex, 0);
				var index = this.ProgramReadArg(instructionIndex, 1);
				
				for(var i = 0; i < this.data[index].length; i ++)
				{
					this.memory[address + i] = this.data[index][i];
				}

			}
			else if(opCode == opCodes.stringCopy)
			{
				var addressTo = this.ProgramReadArg(instructionIndex, 0);
				var addressFrom = this.ProgramReadArg(instructionIndex, 1);
				
				var memorySize = this.MemoryGetSize();

				var endFound = false;
				var endPosition;
				var i = 0;
				while(!endFound && i < memorySize)
				{
					if(this.memory[addressFrom + i] == 0)
					{
						endFound = true;
						endPosition = i;
					}
					else
					{
						this.memory[addressTo + i] = this.memory[addressFrom + i];
						i ++;
					}
				}
				
				if(endFound)
				{
					this.memory[addressTo + endPosition] = 0;
				}
				
			}
			else if(opCode == opCodes.stringLength)
			{
				var stringAddress = this.ProgramReadArg(instructionIndex, 1);
				
				var memorySize = this.MemoryGetSize();

				var endFound;
				var length = 0;
				var i = 0;
				while(!endFound && i < memorySize)
				{
					if(this.memory[stringAddress + i] == 0)
					{
						endFound = true;
					}
					else
					{
						length ++;
						i ++;
					}
				}
				
				this.ProgramWriteArg(instructionIndex, 0, length);
				
				
			}			
			else if(opCode == opCodes.inputReadString)
			{
				var address = this.ProgramReadArg(instructionIndex, 0);

				this.inputWaitString = true;
				this.inputStringReady = false;				
				this.inputWaitStringDestinationAddress = address;
				this.inputWaitStringIsNumber = false;
				
			}			
			else if(opCode == opCodes.outputWriteString)
			{
				var address = this.ProgramReadArg(instructionIndex, 0);
				
				var memorySize = this.MemoryGetSize();
				var markFound = false;
				var i = 0;
				
				while(!markFound && address + i < memorySize)
				{
					var c = this.memory[address + i];
					
					if(c == 0)
					{
						markFound = true;
					}
					else
					{
						this.KeyboardDoWriteCharacter(c);
						i ++;				
					}
							
				}
				
			}	
			else if(opCode == opCodes.outputWriteLineEnd)
			{
				
				for(var i = 0; i < configuration.outputMemorySize; i ++)
				{
					this.memory[this.outputMemoryAddress + i] = 0;
				}
				
				
			}	
			else if(opCode == opCodes.inputReadNumber)
			{
				this.inputWaitString = true;
				this.inputStringReady = false;
				this.inputWaitStringDestinationInstructionIndex = instructionIndex;
				this.inputWaitStringDestinationArgIndex = 0;
				this.inputWaitStringIsNumber = true;
				
			}
			else if(opCode == opCodes.outputWriteNumber)
			{
				var value = this.ProgramReadArg(instructionIndex, 0);
				
				var text = value.toString();
				
				var memorySize = this.MemoryGetSize();
				var markFound = false;
				var i = 0;
				
				
				while(i < text.length && i < configuration.outputMemorySize && i + this.outputMemoryAddress < memorySize)
				{
					this.KeyboardDoWriteCharacter(text.charCodeAt(i));
					i ++;
							
				}
				
				
			}
			else if(opCode == opCodes.inputReadCharacter)
			{
				this.inputWaitCharacter = true;
				this.inputCharacterReady = false;
				this.inputWaitCharacterDestinationInstructionIndex = instructionIndex;
				this.inputWaitCharacterDestinationArgIndex = 0;
				
			}			
			else if(opCode == opCodes.outputWriteCharacter)
			{
				var c = this.ProgramReadArg(instructionIndex, 0);
				
				this.KeyboardDoWriteCharacter(c);
				
			}
			else if(opCode == opCodes.randGenerate)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 1);
				var value2 = this.ProgramReadArg(instructionIndex, 2);

				var randomValue = Math.floor(value1 + Math.random() * (value2 - value1 + 1));

				this.ProgramWriteArg(instructionIndex, 0, randomValue);
			
				this.lastRandomNumber = randomValue;
			}
			else if(opCode == opCodes.screenClear)
			{
				var pixelsStartAddress = this.ScreenGetPixelsStartAddress();
				
				for(var i = 0; i < configuration.screenHeight * configuration.screenWidth; i++)
				{	
					var pixelAddress = pixelsStartAddress + i * configuration.screenDepth;
					
					this.memory[pixelAddress + 0] = this.memory[this.screenMemoryAddress + this.screenControlMemoryClearColorOffset + 0];
					
					if(configuration.screenDepth == 3)
					{
						this.memory[pixelAddress + 1] = this.memory[this.screenMemoryAddress + this.screenControlMemoryClearColorOffset + 1];
						this.memory[pixelAddress + 2] = this.memory[this.screenMemoryAddress + this.screenControlMemoryClearColorOffset + 2];
					}
				}
			}
			else if(opCode == opCodes.screenSetFlipXEnabled || opCode == opCodes.screenSetFlipYEnabled || opCode == opCodes.screenSetColorKeyEnabled)
			{
				var value = this.ProgramReadArg(instructionIndex, 0);
				
				var offset = 0;
				
				if(opCode == opCodes.screenSetFlipXEnabled) { offset = this.screenControlMemoryFlipXOffset; }
				else if(opCode == opCodes.screenSetFlipYEnabled) { offset = this.screenControlMemoryFlipYOffset; }
				else // opCode == opCodes.screenSetColorKeyEnabled
				{ offset = this.screenControlMemoryColorKeyEnabledOffset; }
				
				this.memory[this.screenMemoryAddress + offset] = value;
				
			}
			else if(opCode == opCodes.screenSetClearColor || opCode == opCodes.screenSetClearColorR || opCode == opCodes.screenSetClearColorG || opCode == opCodes.screenSetClearColorB ||
					opCode == opCodes.screenSetColorKey || opCode == opCodes.screenSetColorKeyR || opCode == opCodes.screenSetColorKeyG || opCode == opCodes.screenSetColorKeyB)
			{
				var value = this.ProgramReadArg(instructionIndex, 0);

				if(opCode == opCodes.screenSetClearColor || opCode == opCodes.screenSetColorKey)
				{
					var offset = (opCode == opCodes.screenSetClearColor ? this.screenControlMemoryClearColorOffset: this.screenControlMemoryColorKeyOffset);
					
					this.memory[this.screenMemoryAddress + offset] = value;
				}
				else if(configuration.screenDepth == 3)
				{
					
					var offset;
					var channel;
					
					if(opCode == opCodes.screenSetClearColorR || opCode == opCodes.screenSetClearColorG || opCode == opCodes.screenSetClearColorB)
					{
						offset = this.screenControlMemoryClearColorOffset;
						
						if(opCode == opCodes.screenSetClearColorR) { channel = 0; }
						else if(opCode == opCodes.screenSetClearColorG) { channel = 1; }
						else // opCode == opCodes.screenSetClearColorB
						{ channel = 2; }
					}
					else
					{
						offset = this.screenControlMemoryColorKeyOffset;

						if(opCode == opCodes.screenSetColorKeyR) { channel = 0; }
						else if(opCode == opCodes.screenSetColorKeyG) { channel = 1; }
						else // opCode == opCodes.screenSetColorKeyB
						{ channel = 2; }
					}
					
					this.memory[this.screenMemoryAddress + offset + channel] = value;
				}
				else
				{
					alert("No se puede establecer el color por canales en la línea de programa " + instructionIndex + " porque la pantalla no tiene suficiente profundidad");
				}
				
			}
			else if(opCode == opCodes.screenGetPixel || opCode == opCodes.screenGetPixelR || opCode == opCodes.screenGetPixelG || opCode == opCodes.screenGetPixelB)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 1);
				var value2 = this.ProgramReadArg(instructionIndex, 2);
				
				if(opCode == opCodes.screenGetPixel || configuration.screenDepth == 3)
				{				
					var component = 0;
					if(opCode == opCodes.screenGetPixel || opCode == opCodes.screenGetPixelR) { component = 0; }
					else if(opCode == opCodes.screenGetPixelG) { component = 1; }
					else // opCode == opCodes.screenGetPixelB
					{ component = 2; }				
					
					var address = this.ScreenGetPixelsStartAddress() + configuration.screenDepth * (value2 * configuration.screenWidth + value1) + component;
					var value = this.memory[address];
					
					this.ProgramWriteArg(instructionIndex, 0, value);
				}
				else
				{
					alert("No puedes obtener los componentes de color en la línea de programa " + instructionIndex + " porque la pantalla no tiene suficiente profundidad");
					instructionResult = constants.instructionResultProgramEnd;
				}
				
			}
			else if(opCode == opCodes.screenSetPixel || opCode == opCodes.screenSetPixelR || opCode == opCodes.screenSetPixelG || opCode == opCodes.screenSetPixelB || opCode == opCodes.screenSetPixelRGB)
			{
				var value1 = this.ProgramReadArg(instructionIndex, 0);
				var value2 = this.ProgramReadArg(instructionIndex, 1);
				var value3 = this.ProgramReadArg(instructionIndex, 2);
				
				if(opCode == opCodes.screenSetPixel || configuration.screenDepth == 3)
				{				
					var component = 0;
					var allComponents = false;
					if(opCode == opCodes.screenSetPixel || opCode == opCodes.screenSetPixelR) { component = 0; }
					else if(opCode == opCodes.screenSetPixelG) { component = 1; }
					else if(opCode == opCodes.screenSetPixelB) { component = 2; }				
					else // opCode == opCodes.screenSetPixelRGB
					{ allComponents = true; }
					
					var pixelAddress = this.ScreenGetPixelsStartAddress() + configuration.screenDepth * (value2 * configuration.screenWidth + value1);
					
					if(allComponents)
					{
						var b = (value3 & 0x0000FF);
						var g = (value3 & 0x00FF00) / 0x100;
						var r = (value3 & 0xFF0000) / 0x10000;
						
						this.memory[pixelAddress + 0] = r;
						this.memory[pixelAddress + 1] = g;
						this.memory[pixelAddress + 2] = b;
						
					}
					else
					{
						this.memory[pixelAddress + component] = value3;
					}
				}
				else
				{
					alert("No puedes poner los componentes de color en la línea de programa " + instructionIndex + " porque la pantalla no tiene suficiente profundidad");
					instructionResult = constants.instructionResultProgramEnd;
				}
			}
			else if(opCode == opCodes.screenDrawImage)
			{
				var screenPositionX = this.ProgramReadArg(instructionIndex, 0);
				var screenPositionY = this.ProgramReadArg(instructionIndex, 1);
				var imageAddress = this.ProgramReadArg(instructionIndex, 2);
				
				var imageWidth = this.memory[imageAddress + 0];
				var imageHeight = this.memory[imageAddress + 1];
				var imageDepth = this.memory[imageAddress + 2];
				
				if(imageDepth <= configuration.screenDepth)
				{
					for(var y = 0; y < imageHeight; y ++)
					{
						for(var x = 0; x < imageWidth; x ++)
						{
							var flipX = (this.memory[this.screenMemoryAddress + this.screenControlMemoryFlipXOffset] != 0);
							var flipY = (this.memory[this.screenMemoryAddress + this.screenControlMemoryFlipYOffset] != 0);
							
							
							var screenPixelX = screenPositionX + x;
							var screenPixelY = screenPositionY + y;
							
							if(screenPixelX >= 0 && screenPixelX < configuration.screenWidth &&
							   screenPixelY >= 0 && screenPixelY < configuration.screenHeight)
						   {
								var imagePixelAddress = imageAddress + 3 + ((flipY ? imageHeight - y - 1: y) * imageWidth + (flipX ? imageWidth - x - 1: x)) * imageDepth;
								var screenPixelAddress = this.ScreenGetPixelsStartAddress() + configuration.screenDepth * (screenPixelY * configuration.screenWidth + screenPixelX);
								
								var imagePixelR = this.memory[imagePixelAddress + 0];
								var imagePixelG = this.memory[imagePixelAddress + 1];
								var imagePixelB = this.memory[imagePixelAddress + 2];
								
								var colorKeyDiscard = false;
								
								if(this.memory[this.screenMemoryAddress + this.screenControlMemoryColorKeyEnabledOffset] != 0)
								{
									var keyColorR = this.memory[this.screenMemoryAddress + this.screenControlMemoryColorKeyOffset];
									var keyColorG = this.memory[this.screenMemoryAddress + this.screenControlMemoryColorKeyOffset + 1];
									var keyColorB = this.memory[this.screenMemoryAddress + this.screenControlMemoryColorKeyOffset + 2];
									
									colorKeyDiscard = (imagePixelR == keyColorR && imagePixelG == keyColorG &&  imagePixelB == keyColorB);
								}
								
								if(!colorKeyDiscard)
								{							
									this.memory[screenPixelAddress + 0] = imagePixelR;
									this.memory[screenPixelAddress + 1] = imagePixelG;
									this.memory[screenPixelAddress + 2] = imagePixelB;
								}

						   }
							
							
						}
					}
				}
				else
				{
					alert("No puedes los datos de los píxels porque la pantalla no tiene suficiente profundidad");
					instructionResult = constants.instructionResultProgramEnd;
				}
				
			}
			else if(opCode == opCodes.soundEmit)
			{
				var value = this.ProgramReadArg(instructionIndex, 0);
				var channel = (configuration.audioChannels > 1 ? this.ProgramReadArg(instructionIndex, 1) : 0);

				
				if(this.audioContext != null)
				{			
					this.oscillator[channel].frequency.value = value;
					this.lastGeneratedTone[channel] = value;
					
					if(!this.oscillatorConnected[channel])
					{
						this.oscillator[channel].connect(this.audioContext.destination);				
						this.oscillatorConnected[channel] = true;
					}
				}
				else
				{
					alert("Tienes que habilitar el generador de sonidos para poder ejecutar la instrucción de la línea de programa " + instructionIndex);
					instructionResult = constants.instructionResultProgramEnd;
				}

			
			}
			else if(opCode == opCodes.soundStop)
			{
				var channel = (configuration.audioChannels > 1 ? this.ProgramReadArg(instructionIndex, 0) : 0);
				
				if(this.audioContext != null)
				{	
					if(this.oscillatorConnected)
					{
						this.oscillator[channel].disconnect(this.audioContext.destination);
						this.oscillatorConnected[channel] = false;	
					}
				}
				else
				{
					window.alert("Tienes que habilitar el generador de sonidos primero para usar la instrucción " + opCode + " en la línea de programa " + pc);
					instructionResult = constants.instructionResultProgramEnd;
				}			
			}
			else if(opCode == opCodes.stackPush)
			{
				//var value = this.ProgramReadArg(instructionIndex, 0);
				
				var sp =  this.registers[registerId.sp];
				
				if(sp == this.stackMemoryAddress)
				{
					alert("No se puede montar nada más en la pila porque está llena.");
					
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					//this.memory[sp - 1] = value;
					this.registers[registerId.sp] = sp - 1;
					
				}					


			}
			else if(opCode == opCodes.stackPop)
			{
				var sp =  this.registers[registerId.sp];

				if(sp >= this.stackMemoryAddress + configuration.stackMemorySize)
				{
					alert("No puedes desmontar nada en la pila porque está vacía");
					
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					//var value = this.memory[sp];
					this.memory[sp] = 0;
					
					this.registers[registerId.sp] = sp + 1;
					
					//this.ProgramWriteArg(instructionIndex, 0, value);
					
				}
			}
			else if(opCode == opCodes.stackGetLocal)
			{
				var localIndex = this.ProgramReadArg(instructionIndex, 1);
				
				var localAddress = (this.registers[registerId.bp] - (localIndex + 1));
				
				if(localAddress < this.stackMemoryAddress)
				{
					alert("No existe una celda con ese indice de local en la pila");
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					var localValue = this.memory[localAddress];
					
					this.ProgramWriteArg(instructionIndex, 0, localValue);
				}
				
			}
			else if(opCode == opCodes.stackSetLocal)
			{
				var localIndex = this.ProgramReadArg(instructionIndex, 0);
				var value = this.ProgramReadArg(instructionIndex, 1);
				
				var localAddress = (this.registers[registerId.bp] - (localIndex + 1));
				
				if(localAddress < this.stackMemoryAddress)
				{
					alert("No existe una celda con ese indice de local en la pila");
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					
					this.memory[localAddress] = value;
				
				}
				
			}
			else if(opCode == opCodes.stackGetParameter)
			{
				var paramIndex = this.ProgramReadArg(instructionIndex, 1);
				
				var bp = this.registers[registerId.bp];
				var numParams = (this.memory[bp + 1]);
				
				
				var paramAddress = (bp + 2 + numParams - paramIndex);
				
				if(paramAddress < this.stackMemoryAddress)
				{
					alert("No existe una celda con ese indice de parámetro en la pila");
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					var paramValue = this.memory[paramAddress];
					
					this.ProgramWriteArg(instructionIndex, 0, paramValue);
				}
				
			}
			else if(opCode == opCodes.stackPushParameter)
			{
				var value = this.ProgramReadArg(instructionIndex, 0);
				
				var sp =  this.registers[registerId.sp];
				
				if(sp == this.stackMemoryAddress)
				{
					alert("No se puede montar nada más en la pila porque está llena.");
					
					instructionResult = constants.instructionResultProgramEnd;
				}
				else
				{
					this.memory[sp - 1] = value;
					this.registers[registerId.sp] = sp - 1;
					
				}
				
			}
			else if(opCode == opCodes.allocateMemory)
			{
				var size = this.ProgramReadArg(instructionIndex, 1);
				
				var address = this.DynamicMemoryAllocate(size);
				
				this.ProgramWriteArg(instructionIndex, 0, address);
			}
			else if(opCode == opCodes.releaseMemory)
			{
				var address = this.ProgramReadArg(instructionIndex, 0);
				
				this.DynamicMemoryRelease(address);
				
			}
			else if(opCode == opCodes.getTimer)
			{
				var index = this.ProgramReadArg(instructionIndex, 1);
				
				var value = this.TimerGetValue(index);
				
				this.ProgramWriteArg(instructionIndex, 0, value);
				
			}	
			else if(opCode == opCodes.resetTimer)
			{
				var index = this.ProgramReadArg(instructionIndex, 0);
				
				this.TimerReset(index);
			}	
			else if(opCode == opCodes.breakPoint)
			{
				instructionResult = constants.instructionResultInterrupt;
				
			}	
			else if(opCode == opCodes.none)
			{
				instructionResult = constants.instructionResultProgramEnd;
			}
			else
			{
				window.alert("Instrucción " + opCode + " no reconocida en línea de programa " + instructionIndex);
				instructionResult = constants.instructionResultProgramEnd;
			}
			
			if(instructionResult == constants.instructionResultContinue || instructionResult == constants.instructionResultInterrupt)
			{
				if(isJump)
				{
					this.registers[registerId.pc] = jumpAddress;
				}
				else
				{
					if(instructionIndex + 1 >= configuration.programSize)
					{
						instructionResult = constants.instructionResultProgramEnd;
					}
					else
					{
						this.registers[registerId.pc] = instructionIndex + 1;
					}
				}

			}
			
			return instructionResult;
			
			
		}
		
		
		MemoryReset()
		{
			var memorySize = this.MemoryGetSize();
			for(var i = 0; i < memorySize; i++)
			{
				this.memoryCells[i].value = "0";
			}
			
		}
		
		MemoryClearLabels()
		{
			for(var i = this.staticMemoryAddress; i < configuration.staticMemorySize; i++)
			{
				this.memoryLabelsCells[i].value = "";
			}
		}
		
		ProgramClear()
		{
			for(var i = 0; i < configuration.programSize; i++)
			{
				this.programCells[i].value = "";
			}
		}
		
		ProcessorReset()
		{
			this.registersCells[registerId.a].value = "0";
			this.registersCells[registerId.b].value = "0";
			this.registersCells[registerId.c].value = "0";
			this.registersCells[registerId.pc].value = "0";
			this.registersCells[registerId.sp].value = this.stackMemoryAddress + configuration.stackMemorySize;
			this.registersCells[registerId.bp].value = this.stackMemoryAddress + configuration.stackMemorySize;
			this.registersCells[registerId.r].value = "0";
			
		}
		
		
		DoEnterStateRunning()
		{
			if(!this.step)
			{
				// Show buttons as not responsive
				
				this.buttonNewProject.style.opacity = 0.35;
				this.buttonLoadProject.style.opacity = 0.35;
				this.buttonSaveProject.style.opacity = 0.35;
				this.buttonConfiguration.style.opacity = 0.35;
				this.buttonProcessorReset.style.opacity = 0.35;
				this.buttonRun.style.opacity = 0.35;
				this.buttonStep.style.opacity = 0.35;
				this.buttonStop.style.opacity = 1.0;
				this.buttonShowOnRun.style.opacity = 0.35;
				this.buttonAbout.style.opacity = 0.35;
				this.buttonHelp.style.opacity = 0.35;
			}
			

			// Update memory
			
			var memorySize = this.MemoryGetSize();			
			
			for(var i = 0; i < memorySize; i ++)
			{
				var cell = this.memoryCells[i];
				this.memory[i] = parseInt(cell.value, 10);
			}
			
			// Update registers
			
			var cell = this.registersCells[registerId.a];
			this.registers[registerId.a] = parseInt(cell.value, 10);
			
			cell = this.registersCells[registerId.b];		
			this.registers[registerId.b] = parseInt(cell.value, 10);
			
			cell = this.registersCells[registerId.c];				
			this.registers[registerId.c] = parseInt(cell.value, 10);
			

			cell = this.registersCells[registerId.pc];
			this.registers[registerId.pc] = parseInt(cell.value, 10);

			cell = this.registersCells[registerId.sp];
			this.registers[registerId.sp] = parseInt(cell.value, 10);
			
			cell = this.registersCells[registerId.bp];
			this.registers[registerId.bp] = parseInt(cell.value, 10);

			cell = this.registersCells[registerId.r];
			this.registers[registerId.r] = parseInt(cell.value, 10);
			
			// Update timer
			
			this.TimerEnterStateRunning();
			
			// Reset state
			
			this.keyboardLastKeyPressed = 0;
			this.lastRandomNumber = 0;
			
			for(var i = 0; i < configuration.audioChannels; i++)
			{
				this.lastGeneratedTone[i] = 0;
			}
			this.waitTimer = false;
			this.inputWaitString = false;
			this.inputStringReady = false;
			this.inputWaitCharacter = false;
			this.inputCharacterReady = false;
		}
		
		DoExitStateRunning()
		{
			if(!this.step)
			{
				this.buttonNewProject.style.opacity = 1;
				this.buttonLoadProject.style.opacity = 1;
				this.buttonSaveProject.style.opacity = 1;
				this.buttonConfiguration.style.opacity = 1;
				this.buttonProcessorReset.style.opacity = 1;
				this.buttonRun.style.opacity = 1;
				this.buttonStep.style.opacity = 1;
				this.buttonStop.style.opacity = 0.35;
				this.buttonShowOnRun.style.opacity = 1;
				this.buttonAbout.style.opacity = 1;
				this.buttonHelp.style.opacity = 1;
			}
			
			this.RegistersShow();			
			this.MemoryShow();
			
			
		}
		
		ProjectNew()
		{
			this.PrepareRestart();
			this.Start();
		}
		
		ProjectSave()
		{
			var separator = constants.projectSaveSectionSeparator;
			
			var configurationText = this.ConfigurationSave();
			
			var commentText = this.CommentSave();
			
			var registersText = this.RegistersSave();
			
			var memoryText = this.MemorySave();
			
			var programText = this.ProgramSave();
			
			var text = configurationText + separator + commentText + separator + registersText + separator + memoryText + separator + programText;
			
			var name = prompt("Escribe un nombre para el proyecto", "NuevoProyecto");
			
			if(name != null)
			{
				name = name.trim();
				if(name.length > 0)
				{
					var link = document.createElement('a');
					link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
					link.setAttribute('download', name + ".mbp");
					link.style.display = 'none';
					document.body.appendChild(link);		
					link.click();
					document.body.removeChild(link);
				}
				else
				{
					alert("El nombre no puede estar vacío");
				}
			}
			
		}
		
		ProjectLoad()
		{
			var DoLoad1 = function (file)
			{		
				var fileReader = new FileReader();
				
				
				var text = fileReader.readAsText(file);
				var doLoadFunction = function() { DoLoad2(this.result); }
				
				fileReader.onload = doLoadFunction;
						
			}
			
			var DoLoad2 = function (contents)
			{
				var sections = contents.split(constants.projectSaveSectionSeparator);
				
				machine.PrepareRestart();
				
				machine.ConfigurationLoad(sections[0]);
				machine.Start();
				
				machine.CommentLoad(sections[1]);
				machine.RegistersLoad(sections[2]);
				machine.MemoryLoad(sections[3]);
				machine.ProgramLoad(sections[4]);
				
				machine.DynamicMemoryReset();
				machine.MemoryReset();
				machine.ProcessorReset();
				

			}			
			
			var input = document.createElement('input');
			input.style.display = 'none';
			input.type = "file";
			input.accept = ".mbp";
			document.body.appendChild(input);
			
			var doLoadFunction = function() { DoLoad1(this.files[0]); }
			
			input.addEventListener('change', doLoadFunction);
			input.click();
			document.body.removeChild(input);
			
		}



		// Events
		
		OnChangeTheme(index)
		{
			this.ThemeDoApply(index);
			this.themeIndex = index;
		}
		
		OnKeyPressed(k)
		{
			this.keyboardLastKeyPressed = k;
			this.keyPressed = true;
			this.keyPressedCode = k;
		}

		OnKeyReleased(k)
		{
			this.keyboardLastKeyPressed = 0;
			this.keyReleased = true;
			this.keyReleasedCode = k;
		}
		
		OnApplyConfigurationPressed()
		{
			this.applyConfigurationPressed = true;			
		}

		OnResetProcessorPressed()
		{
			this.resetPressed = true;
		}
		
		OnClearProgramPressed()
		{
			this.clearProgramPressed = true;
		}
		
		OnClearMemoryLabelsPressed()
		{
			this.clearMemoryLabelsPressed = true;
		}

		OnRunPressed()
		{
			this.runPressed = true;
			
		}
		
		OnStopPressed()
		{
			this.stopPressed = true;
		}
		
		OnStepPressed()
		{
			this.stepPressed = true;
		}
		
		OnEnableToneGenerator()
		{
			this.enableToneGenerator = true;
			
			this.ProcessorTick();
		}
		
		
		OnInsertProgramLinePressed()
		{
			this.insertProgramLinePressed = true;
			
			this.ProcessorTick();
		}

		OnDeleteProgramLinePressed()
		{
			this.deleteProgramLinePressed = true;
			
			this.ProcessorTick();
			
		}
		
		OnInsertStringDataPressed()
		{
			this.insertStringDataPressed = true;
			
			this.ProcessorTick();
		}

		OnInsertImageDataPressed()
		{
			this.insertImageDataPressed = true;
			
			this.ProcessorTick();
		}
		
		OnSaveProjectPressed()
		{
			this.saveProjectPressed = true;
			
			this.ProcessorTick();
			
		}		
		
		OnLoadProjectPressed()
		{
			this.loadProjectPressed = true;
			this.ProcessorTick();
		}
		
		OnNewProjectPressed()
		{
			this.newProjectPressed = true;
			this.ProcessorTick();
		}
		
		OnShowOnRunPressed()
		{
			this.showOnRunPressed = true;
			this.ProcessorTick();
		}
		
		OnDialogOpenPressed(id)
		{
			this.dialogOpenPressed = true;
			this.dialogOpenId = id;
			this.ProcessorTick();
		}
		
		OnDialogClosePressed()
		{
			this.dialogClosePressed = true;
			this.ProcessorTick();
		}
		
		OnHelpShowPressed(id)
		{
			this.helpShowPressed = true;
			this.helpShowPressedId = id;
			this.ProcessorTick();

		}
		
		
	}

	var machine;
	
	function OnError(message)
	{
		alert("Se ha producido un error interno en la MiniBoy de origen indeterminado. Guarda tu trabajo y vuelve a cargar la página.\n\nError: " + message);
		
		// Prevents default error handler
		//return true;
	
	}
	
	function OnKeyPressed(e)
	{	
		// Prevents default page scrolling
		
		if((e.keyCode == constants.keyboardSpaceCode ||
			e.keyCode == constants.keyboardShortcutEnable) && e.target == document.body) { e.preventDefault(); }
		
				
		
		if(machine.shortcutEnabled)
		{
			if( e.keyCode == constants.keyboardShortcutRun ||
				e.keyCode == constants.keyboardShortcutStep ||
				e.keyCode == constants.keyboardShortcutStop ||
				e.keyCode == constants.keyboardShortcutReset ||
				e.keyCode == constants.keyboardShortcutDebug ||
				e.keyCode == constants.keyboardShortcutLoad ||
				e.keyCode == constants.keyboardShortcutSave ||
				e.keyCode == constants.keyboardShortcutNew ||
				e.keyCode == constants.keyboardShortcutConfiguration ||
				e.keyCode == constants.keyboardShortcutHelp ||
				e.keyCode == constants.keyboardShortcutAbout)
			{
				e.preventDefault();
			}
		}
		
	
		machine.OnKeyPressed(e.keyCode);
	}

	function OnKeyReleased(e)
	{	
		machine.OnKeyReleased(e.keyCode);
	}


	function OnInterval()
	{
		if(machine.ResourcesAreLoaded())
		{
			if(!machine.isStarted)
			{
				machine.Start();					
			}

			var ticks;
			if(machine.IsRunning())
			{
				var processorFrequency = configuration.processorFrequency;
				if(machine.ShowOnRunIsEnabled()) { processorFrequency = constants.showOnRunProcessorFrequencyLimit; }
				ticks = Math.floor(processorFrequency / configuration.screenFrequency);
				if(ticks < 1) { ticks = 1; }
			}
			else
			{
				ticks = 1;
			}
			
			for(var i = 0; i < ticks ; i ++)
			{
				machine.ProcessorTick();
			}
			
			machine.ScreenShow();
			machine.InputOutputShow(true);
			machine.InputOutputShow(false);			
		
		}
	}


	function Main()
	{
		window.onerror = OnError;
		
		machine = new Machine();
		machine.ResourcesLoad();
		
		document.addEventListener('keydown', OnKeyPressed, false);
		document.addEventListener('keyup', OnKeyReleased, false);
		
		setInterval(OnInterval, 1.0 / configuration.screenFrequency * 1000);	

		
	}




