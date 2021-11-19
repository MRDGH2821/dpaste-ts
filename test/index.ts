import { suite } from "uvu";
import * as assert from "uvu/assert";
import * as paste from "../src";

const API = suite("exports");

API("should export an object", () => {
  assert.type(paste, "object");
});

API.run();
const data = "Some sample data for testing dpaste module using uvu";
const title = "Dpaste Module Test";

let url = paste.CreatePaste(data, title);

const create = suite("create");

create("Should create a paste & return url", async () => {
  assert.type(await paste.CreatePaste(data, title), "string");
});
const errmsg = `* Unknown syntax plain. Valid choices: abap apl abnf as3 as ada adl agda aheui alloy at ampl html+ng2 ng2 antlr-as antlr-csharp antlr-cpp antlr-java antlr antlr-objc antlr-perl antlr-python antlr-ruby apacheconf applescript arduino aspectj asy augeas autoit ahk awk bbcbasic bbcode bc bst basemake bash console bat befunge bib blitzbasic blitzmax bnf boa boo boogie brainfuck bugs camkes c cmake c-objdump cpsa aspx-cs csharp ca65 cadl capdl capnp cbmbas ceylon cfengine3 chai chapel charmci html+cheetah js+cheetah cheetah xml+cheetah cirru clay clean clojure clojurescript cobolfree cobol coffee-script cfc cfm cfs common-lisp componentpascal coq cpp cpp-objdump crmsh croc cryptol cr csound-document csound csound-score css+django css+erb css+genshitext css css+php css+smarty cuda cypher cython d d-objdump dpatch dart dasm16 control delphi dg diff django docker dtd duel dylan-console dylan dylan-lid ecl ec earl-grey easytrieve ebnf eiffel iex elixir elm emacs email erb erlang erl html+evoque evoque xml+evoque ezhil fsharp factor fancy fan felix fennel fish flatline floscript forth fortranfixed fortran foxpro freefem gap glsl gas genshi genshitext pot cucumber gnuplot go golo gooddata-cl gosu gst groff groovy hlsl haml html+handlebars handlebars haskell hx hexdump hsail hspec html+django html+genshi html html+php html+smarty http haxeml hylang hybris idl icon idris igor inform6 i6t inform7 ini io ioke irc isabelle j jags jasmin java js+django js+erb js+genshitext js js+php js+smarty jcl jsgf json-object jsonld json jsp jlcon julia juttle kal kconfig kmsg koka kotlin lsl css+lasso html+lasso js+lasso lasso xml+lasso lean less lighty limbo liquid lagda lcry lhs lidr live-script llvm llvm-mir-body llvm-mir logos logtalk lua mime moocode doscon make css+mako html+mako js+mako mako xml+mako maql md mask mason mathematica matlab matlabsession minid ms modelica modula2 trac-wiki monkey monte moon mosel css+mozpreproc mozhashpreproc javascript+mozpreproc mozpercentpreproc xul+mozpreproc mql mscgen mupad mxml mysql css+myghty html+myghty js+myghty myghty xml+myghty ncl nsis nasm objdump-nasm nemerle nesc newlisp newspeak nginx nim nit nixos notmuch nusmv numpy objdump objective-c objective-c++ objective-j ocaml octave odin ooc opa openedge pacmanconf pan parasail pawn peg perl6 perl php pig pike pkgconfig plpgsql pony postscript psql postgresql pov powershell ps1con praat prolog properties protobuf pug puppet pypylog python2 py2tb pycon python pytb qbasic qvto qml rconsole rnc spec racket ragel-c ragel-cpp ragel-d ragel-em ragel-java ragel ragel-objc ragel-ruby raw rd reason rebol red redcode registry resource rexx rhtml ride roboconf-graph roboconf-instances robotframework rql rsl rst rts rbcon rb rust sas splus sml sarl sass scala scaml scdoc scheme scilab scss shexc shen sieve silver slash slim slurm smali smalltalk sgf smarty snobol snowball solidity sp sourceslist sparql sql sqlite3 squidconf ssp stan stata sc swift swig systemverilog tap toml tads3 tasm tcl tcsh tcshcon tea ttl termcap terminfo terraform tex text thrift todotxt tsql treetop turtle html+twig twig ts typoscriptcssdata typoscripthtmldata typoscript ucode unicon urbiscript usd vbscript vcl vclsnippets vctreestatus vgl vala aspx-vb vb.net html+velocity velocity xml+velocity verilog vhdl vim wdiff webidl whiley x10 xquery xml+django xml+erb xml xml+php xml+smarty xorg.conf xslt xtend extempore yaml+jinja yaml zeek zephir zig amdgpu arrow asc bare cddl devicetree execline fstar futhark gdscript gsql gcode graphviz jslt kuin meson nestedtext nodejsrepl omg-idl output pointless procfile promql psysh singularity smithy tnt teal ti tid wast yang ansys ipython2 ipython3 ipythonconsole`;
create("Should throw error on invalid syntax", async () => {
  assert.match(await paste.CreatePaste(data, title, "plain", 1), errmsg);
});

create.run();

const get = suite("get");

get("Should get a paste & return String", async () => {
  assert.type(await paste.GetRawPaste(await url), "string");
});

get("Should throw error on invalid input", async () => {
  assert.match(await paste.GetRawPaste("sgfsgsg"), "Error");
});
get.run();
